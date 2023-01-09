import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Renderer2,
  ViewChild
} from "@angular/core"
import {DomSanitizer, SafeUrl} from "@angular/platform-browser"
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import QRCode from 'qrcode'

import {QRCodeConfigType, QRCodeElementType, QRCodeErrorCorrectionLevel, QRCodeVersion,} from "./types"
import {QrcodeServiceService} from "../../services/qrcode-service.service";

@Component({
  selector: 'app-generate-qr-code',
  templateUrl: 'generate-qr-code.component.html',
  styleUrls: ['./generate-qr-code.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenerateQrCodeComponent {
  public value: string = "https://www.google.de/";
  @Input() public allowEmptyString = true
  @Input() public colorDark = "#000000ff"
  @Input() public colorLight = "#ffffffff"
  @Input() public cssClass = "qrcode"
  @Input() public elementType: QRCodeElementType = "img"
  @Input()
  public errorCorrectionLevel: QRCodeErrorCorrectionLevel = "H"
  @Input() public imageSrc?: string
  @Input() public imageHeight?: number
  @Input() public imageWidth?: number = 256
  @Input() public margin = 7
  @Input() public qrdata = ""
  @Input() public scale = 4
  @Input() public version?: QRCodeVersion
  @Input() public width = 10
  // Accessibility features introduced in 13.0.4+
  @Input() public alt?: string
  @Input() public ariaLabel?: string
  @Input() public title?: string
  @Output() qrCodeURL = new EventEmitter<SafeUrl>()
  @ViewChild("qrcElement", {static: true}) public qrcElement!: ElementRef
  public context: CanvasRenderingContext2D | null = null
  config: QRCodeConfigType = {
    color: {
      dark: this.colorDark,
      light: this.colorLight,
    },
    errorCorrectionLevel: this.errorCorrectionLevel,
    margin: this.margin,
    scale: this.scale,
    type: this.elementType,
    version: this.version,
    width: this.width,
  }
  centerImageSrc = this.imageSrc
  centerImageHeight = this.imageHeight || 40
  centerImageWidth = this.imageWidth || 40
  latest: string[] = [];
  private centerImage?: HTMLImageElement

  constructor(private renderer: Renderer2, private sanitizer: DomSanitizer, public qrcodeService: QrcodeServiceService) {
    this.value = "https://www.google.de/";
    this.latest = this.getListFromLocalStorage() ?? [];
    this.generateQR();
  }

  isQRCodeDataValid() {
    if (!this.isValidQrCodeText(this.qrdata)) {
      throw new Error(
        " Field `qrdata` is empty, set 'allowEmptyString=\"true\"' to overwrite this behaviour."
      )
    }
    // This is a workaround to allow an empty string as qrdata
    if (this.isValidQrCodeText(this.qrdata) && this.qrdata === "") {
      this.qrdata = " "
    }
  }

  versionCheck() {
    if (this.version && this.version > 40) {
      console.warn(" max value for `version` is 40");
      this.version = 40;
    } else if (this.version && this.version < 1) {
      console.warn("`min value for `version` is 1");
      this.version = 1;
    } else if (this.version !== undefined && isNaN(this.version)) {
      console.warn(
        " version should be a number, defaulting to auto."
      );
      this.version = undefined;
    }
  }

  img() {
    const imgElement: HTMLImageElement =
      this.renderer.createElement("img")
    this.toDataURL(this.config)
      .then((dataUrl: string) => {
        if (this.alt) {
          imgElement.setAttribute("alt", this.alt)
        }
        if (this.ariaLabel) {
          imgElement.setAttribute("aria-label", this.ariaLabel)
        }
        imgElement.setAttribute("src", dataUrl)
        if (this.title) {
          imgElement.setAttribute("title", this.title)
        }
        this.renderElement(imgElement)
        this.emitQRCodeURL(imgElement)
      })
      .catch((e) => {
        console.error("img/url error:", e)
      })
  }

  emitQRCodeURL(element: HTMLCanvasElement | HTMLImageElement | SVGSVGElement) {
    const className = element.constructor.name
    if (className === SVGSVGElement.name) {
      const svgHTML = element.outerHTML
      const blob = new Blob([svgHTML], {type: "image/svg+xml"})
      const urlSvg = URL.createObjectURL(blob)
      const urlSanitized = this.sanitizer.bypassSecurityTrustUrl(urlSvg)
      this.qrCodeURL.emit(urlSanitized)
      return
    }

    let urlImage = ""

    if (className === HTMLCanvasElement.name) {
      urlImage = (element as HTMLCanvasElement).toDataURL("image/png")
    }

    if (className === HTMLImageElement.name) {
      urlImage = (element as HTMLImageElement).src
    }

    fetch(urlImage)
      .then((urlResponse: Response) => urlResponse.blob())
      .then((blob: Blob) => URL.createObjectURL(blob))
      .then((url: string) => this.sanitizer.bypassSecurityTrustUrl(url))
      .then((urlSanitized: SafeUrl) => {
        this.qrCodeURL.emit(urlSanitized)
      })
      .catch((error) => {
        console.error(
          " Error when fetching image/png URL: " + error
        )
      })
  }

  canvas() {
    const canvasElement: HTMLCanvasElement =
      this.renderer.createElement("canvas")
    this.context = canvasElement.getContext("2d")
    this.toCanvas(canvasElement, this.config)
      .then(() => {
        if (this.ariaLabel) {
          this.renderer.setAttribute(
            canvasElement,
            "aria-label",
            `${this.ariaLabel}`
          )
        }
        if (this.title) {
          this.renderer.setAttribute(
            canvasElement,
            "title",
            `${this.title}`
          )
        }

        if (this.centerImageSrc && this.context) {
          this.centerImage = new Image(
            this.centerImageWidth,
            this.centerImageHeight
          )

          if (this.centerImageSrc !== this.centerImage.src) {
            this.centerImage.src = this.centerImageSrc
          }

          if (this.centerImageHeight !== this.centerImage.height) {
            this.centerImage.height = this.centerImageHeight
          }

          if (this.centerImageWidth !== this.centerImage.width) {
            this.centerImage.width = this.centerImageWidth
          }

          const centerImage = this.centerImage

          if (centerImage) {
            centerImage.onload = () => {
              this.context?.drawImage(
                centerImage,
                canvasElement.width / 2 - this.centerImageWidth / 2,
                canvasElement.height / 2 - this.centerImageHeight / 2,
                this.centerImageWidth,
                this.centerImageHeight
              )
            }
          }
        }

        this.renderElement(canvasElement)
        this.emitQRCodeURL(canvasElement as HTMLCanvasElement)
      })
      .catch((e) => {
        console.error(" canvas error:", e)
      })

  }

  svg() {
    const svgParentElement: HTMLElement =
      this.renderer.createElement("div")
    this.toSVG(this.config)
      .then((svgString: string) => {
        this.renderer.setProperty(
          svgParentElement,
          "innerHTML",
          svgString
        )
        const svgElement = svgParentElement.firstChild as SVGSVGElement
        this.renderer.setAttribute(svgElement, "height", `${this.width}`)
        this.renderer.setAttribute(svgElement, "width", `${this.width}`)
        this.renderElement(svgElement)
        this.emitQRCodeURL(svgElement)
      })
      .catch((e) => {
        console.error(" svg error:", e)
      })
  }

  async generateQR() {
    this.qrdata = this.value;
    await this.createQRCode()
  }

  async generateQROnClick(value: string) {
    if (this.latest.length > 5) {
      this.latest.shift();
      this.latest.push(value);
    } else {
      this.latest.push(value);
    }
    this.saveInLocalSorage(this.latest);
    this.qrdata = value;
    await this.createQRCode()
  }

  getItemFromLatest(value: string) {
    this.value = value;
    this.generateQR()
  }

  saveInLocalSorage(items: string[]) {
    localStorage.setItem('list', JSON.stringify(items));
  }

  getListFromLocalStorage() {
    return JSON.parse(localStorage.getItem('list')!);
  }

  clearList() {
    this.latest = [];
    this.saveInLocalSorage(this.latest);
    window.location.reload();
  }

  protected isValidQrCodeText(data: string | null): boolean {
    if (!this.allowEmptyString) {
      return !(
        typeof data === "undefined" ||
        data === "" ||
        data === "null" ||
        data === null
      )
    }
    return !(typeof data === "undefined")
  }

  private toDataURL(qrCodeConfig: QRCodeConfigType): Promise<any> {
    return new Promise(
      (resolve: (arg: any) => any, reject: (arg: any) => any) => {
        QRCode.toDataURL(
          this.qrdata,
          qrCodeConfig,
          (err: Error, url: string) => {
            if (err) {
              reject(err)
            } else {
              resolve(url)
            }
          }
        )
      }
    )
  }

  private toCanvas(
    canvas: Element,
    qrCodeConfig: QRCodeConfigType
  ): Promise<any> {
    return new Promise(
      (resolve: (arg: any) => any, reject: (arg: any) => any) => {
        QRCode.toCanvas(canvas, this.qrdata, qrCodeConfig, (error: Error) => {
          if (error) {
            reject(error)
          } else {
            resolve("success")
          }
        })
      }
    )
  }

  private toSVG(qrCodeConfig: QRCodeConfigType): Promise<any> {
    return new Promise(
      (resolve: (arg: any) => any, reject: (arg: any) => any) => {
        QRCode.toString(
          this.qrdata,
          qrCodeConfig,
          (err: Error, url: string) => {
            if (err) {
              reject(err)
            } else {
              resolve(url)
            }
          }
        )
      }
    )
  }

  private renderElement(element: Element): void {
    for (const node of this.qrcElement.nativeElement.childNodes) {
      this.renderer.removeChild(this.qrcElement.nativeElement, node)
    }
    this.renderer.appendChild(this.qrcElement.nativeElement, element)
  }

  private async createQRCode(): Promise<void> {
    // Set sensitive defaults
    this.versionCheck();

    try {
      this.isQRCodeDataValid();
      switch (this.elementType) {
        case "canvas":
          this.canvas();
          break;
        case "svg":
          this.svg();
          break;
        case "url":
        case "img":
        default:
          this.img();
      }
    } catch (e: any) {
      console.error("Error generating QR Code:", e.message)
    }
  }
}

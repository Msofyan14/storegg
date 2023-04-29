import Image from "next/image";
import { Thumbnail3 } from "@/public/img";

export default function CheckoutItem() {
  return (
    <div className="game-checkout d-flex flex-row align-items-center pt-md-50 pb-md-50 pt-30 pb-30">
      <div className="pe-4">
        <div className="cropped">
          <Image
            src={Thumbnail3}
            className="img-fluid"
            alt=""
            priority={true}
          />
        </div>
      </div>
      <div>
        <p className="fw-bold text-xl color-palette-1 mb-10">
          Mobile Legends:
          <br /> The New Battle 2021
        </p>
        <p className="color-palette-2 m-0">Category: Mobile</p>
      </div>
    </div>
  );
}

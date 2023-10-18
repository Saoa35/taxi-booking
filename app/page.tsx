import { Booking } from "@/components/Booking/Booking";

export default function Home() {
  return (
    <div>
      <div className=" grid grid-cols-1 sm:grid-cols-3">
        <div className="">
          <Booking />
        </div>
        <div className="col-span-2">Map</div>
      </div>
    </div>
  );
}

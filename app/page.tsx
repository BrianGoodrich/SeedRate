"use client";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";


export default function Home() {

  const [numrows, setnumrows] = useState("");
  const [wheeldiam, setwheeldiam] = useState("");
  const [numrevs, setnumrevs] = useState("");
  const [seedslb, setseedslb] = useState("");
  const [gramscaught, setgramscaught] = useState("");
  const [desiredrate, setdesiredrate] = useState("");
  const [germ, setgerm] = useState("");
  const [emergence, setemergence] = useState("");
  const [rateseedsacre, setrateseedsacre] = useState("");
  const [outputratelbsacre, setoutputratelbsacre] = useState("");
  const [rateseedslb, setrateseedslb] = useState("");
  const [rowwidth, setrowwidth] = useState("");
  const [calibratelbsperac, setcalibratelbsperac] = useState("");
  const [calibrateseedsperac, setcalibrateseedsperac] = useState("");

  const calibrate = () => {
    //Get area covered
    const area = ((Number(wheeldiam) * Number(numrevs)) * (Number(rowwidth) * Number(numrows))) / 144;

    const multiplier = 43560 / area;
    const lbsperacre = (multiplier * Number(gramscaught)) / 453.592;

    const seedsperacre = lbsperacre * Number(seedslb);

    setcalibratelbsperac(isNaN(lbsperacre) ? '' : lbsperacre.toString());
    setcalibrateseedsperac(isNaN(seedsperacre) ? '' : seedsperacre.toString());
  }

  const calculate = () => {
    setrateseedsacre((Number(desiredrate) / (Number(germ) / 100) / (Number(emergence) / 100)).toString());
    setoutputratelbsacre((Number(rateseedsacre) / Number(rateseedslb)).toString());
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-8 px-4 bg-white dark:bg-black sm:items-center">
        <Image
          src="SeedRate/seedratelogo.png"
          alt="seedrate logo"
          width={500}
          height={100}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
      <form>
      <div className="space-y-12">
        
        <div className="border-b border-white/10 pb-12">
          <h2 className="text-base/7 font-semibold text-white">Planter Calibration Information</h2>
          <p className="mt-1 text-sm/6 text-gray-400">If you&apos;re a big stinky twink enter your planter information below.</p>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="rowwidth" className="block text-sm/6 font-medium text-white">
                Width of row (inches)
              </label>
              <div className="mt-2">
                <input
                  inputMode="numeric"
                  id="rowwidth"
                  name="numrows"
                  value={rowwidth}
                  onChange={(e) => /^\d*$/.test(e.target.value)  ? setrowwidth(e.target.value) : ''} 
                  type="text"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="numrows" className="block text-sm/6 font-medium text-white">
                Number of rows
              </label>
              <div className="mt-2">
                <input
                  id="numrows"
                  name="numrows"
                  value={numrows}
                  onChange={(e) => /^\d*$/.test(e.target.value)  ? setnumrows(e.target.value) : ''} 
                  type="text"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="wheeldiam" className="block text-sm/6 font-medium text-white">
                Diameter of wheel (inches)
              </label>
              <div className="mt-2">
                <input
                  id="wheeldiam"
                  name="wheeldiam"
                  value={wheeldiam}
                  onChange={(e) => /^\d*$/.test(e.target.value)  ? setwheeldiam(e.target.value) : ''} 
                  type="text"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="numrevs" className="block text-sm/6 font-medium text-white">
                Number of wheel revolutions
              </label>
              <div className="mt-2">
                <input
                  id="numrevs"
                  name="numrevs"
                  value={numrevs}
                  onChange={(e) => /^\d*$/.test(e.target.value)  ? setnumrevs(e.target.value) : ''} 
                  type="text"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="seedslb" className="block text-sm/6 font-medium text-white">
                Seeds per pound
              </label>
              <div className="mt-2">
                <input
                  id="seedslb"
                  name="seedslb"
                  value={seedslb}
                  onChange={(e) => /^\d*$/.test(e.target.value)  ? setseedslb(e.target.value) : ''} 
                  type="text"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="gramscaught" className="block text-sm/6 font-medium text-white">
                Grams caught
              </label>
              <div className="mt-2">
                <input
                  id="gramscaught"
                  name="gramscaught"
                  value={gramscaught}
                  onChange={(e) => /^\d*$/.test(e.target.value)  ? setgramscaught(e.target.value) : ''} 
                  type="text"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="calibrateseedsperac" className="block text-sm/6 font-medium text-white">
                seeds/ac.
              </label>
              <div className="mt-2">
                <input
                  id="calibrateseedsperac"
                  name="calibrateseedsperac"
                  value={calibrateseedsperac}
                  onChange={(e) => /^\d*$/.test(e.target.value)  ? setcalibrateseedsperac(e.target.value) : ''} 
                  type="text"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="calibratelbsperac" className="block text-sm/6 font-medium text-white">
                lbs/ac.
              </label>
              <div className="mt-2">
                <input
                  id="calibratelbsperac"
                  name="calibratelbsperac"
                  value={calibratelbsperac}
                  onChange={(e) => /^\d*$/.test(e.target.value)  ? setcalibratelbsperac(e.target.value) : ''} 
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          onClick={ () => calibrate()}
          className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Calibrate
        </button>
      </div>
    </form>
<form>
      <div className="space-y-12">
        <div className="border-b border-white/10 pb-12">
          <h2 className="text-base/7 font-semibold text-white">Seed Rate Calculation</h2>
          <p className="mt-1 text-sm/6 text-gray-400">If you&apos;re a big stinky twink enter your planter information below.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="desiredrate" className="block text-sm/6 font-medium text-white">
                Desired rate
              </label>
              <div className="mt-2">
                <input
                  id="desiredrate"
                  name="desiredrate"
                  value={desiredrate}
                  onChange={(e) => /^\d*$/.test(e.target.value)  ? setdesiredrate(e.target.value) : ''} 
                  type="text"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="rateseedslb" className="block text-sm/6 font-medium text-white">
                Seeds per pound
              </label>
              <div className="mt-2">
                <input
                  id="rateseedslb"
                  name="rateseedslb"
                  value={rateseedslb}
                  onChange={(e) => /^\d*$/.test(e.target.value)  ? setrateseedslb(e.target.value) : ''} 
                  type="text"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="germ" className="block text-sm/6 font-medium text-white">
                Germination % (Found on seed bag)
              </label>
              <div className="mt-2">
                <input
                  id="germ"
                  name="germ"
                  value={germ}
                  onChange={(e) => /^\d*$/.test(e.target.value)  ? setgerm(e.target.value) : ''} 
                  type="text"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="emergence" className="block text-sm/6 font-medium text-white">
                Emergence %
              </label>
              <div className="mt-2">
                <input
                  id="emergence"
                  name="emergence"
                  value={emergence}
                  onChange={(e) => /^\d*$/.test(e.target.value)  ? setemergence(e.target.value) : ''} 
                  type="text"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="rateseedsacre" className="block text-sm/6 font-medium text-white">
                seeds/ac.
              </label>
              <div className="mt-2">
                <input
                  id="rateseedsacre"
                  name="rateseedsacre"
                  value={rateseedsacre}
                  onChange={(e) => /^\d*$/.test(e.target.value)  ? setrateseedsacre(e.target.value) : ''} 
                  type="text"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="outputratelbsacre" className="block text-sm/6 font-medium text-white">
                lbs/ac.
              </label>
              <div className="mt-2">
                <input
                  id="outputratelbsacre"
                  name="outputratelbsacre"
                  value={outputratelbsacre}
                  onChange={(e) => /^\d*$/.test(e.target.value)  ? setoutputratelbsacre(e.target.value) : ''} 
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          onClick={ () => calculate()}
          className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Calculate
        </button>
      </div>
    </form>


        </div>
      </main>
    </div>
  );
}

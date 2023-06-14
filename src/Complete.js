import complete from "./images/icon-complete.svg";
export default function Complete(props) {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <img src={complete} alt="" />
      <h2 className="text-3xl">Thank You</h2>
      <p>
        The previous Form doesn't include any Regex or Patterns <br /> So if you
        have done it messy , congrats you have ran off
      </p>
      <button
        onClick={props.clickFunc}
        className=" w-full py-2 bg-main text-white rounded-xl cursor-pointer"
      >
        Continue
      </button>
    </div>
  );
}

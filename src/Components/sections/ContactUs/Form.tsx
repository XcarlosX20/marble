import { Button } from "@/Components/Layout/Button";

const Form = () => {
  return (
    <form>
      <div className="grid grid-cols-12 grid-rows-12 gap-4 text-fontWhite">
        <div className="sm:col-span-5 row-span-2  col-span-12">
          <label>Name</label>
          <input
            type="text"
            className="w-full px-2 bg-dark-100 h-10 border-light-300 border-2 focus:outline-none focus:rounded"
          />
        </div>
        <div className="sm:col-span-7 row-span-2  col-span-12">
          <label>Email</label>
          <input
            type="email"
            className="w-full px-2 bg-dark-100 h-10 border-light-300 border-2 focus:outline-none focus:rounded"
          />
        </div>
        <div className="col-span-12 row-span-6">
          <label>Message</label>
          <textarea
            rows={5}
            className="w-full px-2 h-[inherit] bg-dark-100 border-light-300 border-2 focus:outline-none focus:rounded"
            name="message"
            id="message"
          ></textarea>
        </div>
        <div className="col-span-12 row-span-2">
          <div className="flex justify-center h-10">
            <Button className="w-36" type="submit">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export { Form };

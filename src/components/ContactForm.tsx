export const ContactForm = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="" action="">
      <h3 className="text-4xl font-semibold mb-9">Billing details</h3>
      <div className="grid gap-9">
        <div className="flex gap-8">
          <div className="grid gap-5">
            <label htmlFor="name">First Name</label>
            <input
              className="border border-grey py-3 px-2 rounded-[10px] w-full max-w-[211px]"
              id="name"
              type="text"
              required
            />
          </div>
          <div className="grid gap-5">
            <label htmlFor="lastName">Last Name</label>
            <input
              className="border border-grey py-3 px-2 rounded-[10px] w-full max-w-[211px]"
              id="lastName"
              type="text"
              required
            />
          </div>
        </div>
        <div className="grid gap-5">
          <label htmlFor="companyName">Company Name (Optional)</label>
          <input
            className="max-w-[453px] w-full border border-grey py-3 px-2 rounded-[10px]"
            id="companyName"
            type="text"
            required
          />
        </div>
        <div className="grid gap-5">
          <label htmlFor="country">Country / Region</label>
          {/* <input
            className="max-w-[453px] w-full border border-grey py-3 px-2 rounded-[10px]"
            id="country"
            type="text"
          /> */}
          <select
            className="max-w-[453px] w-full border border-grey py-3 px-2 rounded-[10px] "
            id="country"
            required>
            <option className="text-grey" value="">
              Your country...
            </option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="Russia">Russia</option>
            <option value="Germany">Germany</option>
            <option value="France">France</option>
          </select>
        </div>
        <div className="grid gap-5">
          <label htmlFor="adress">Street address</label>
          <input
            className="border border-grey py-3 px-2 rounded-[10px] max-w-[453px] w-full"
            id="adress"
            type="text"
            required
          />
        </div>
        <div className="grid gap-5">
          <label htmlFor="city">Town / City</label>
          <input
            className="border border-grey py-3 px-2 rounded-[10px] max-w-[453px] w-full"
            id="city"
            type="text"
            required
          />
        </div>
        <div className="grid gap-5">
          <label htmlFor="province">Country / Region</label>
          <select
            className="max-w-[453px] w-full border border-grey py-3 px-2 rounded-[10px] "
            id="province"
            required>
            <option className="text-grey" value="">
              Your province...
            </option>
            <option value="USA">Shri Lanka</option>
            <option value="Canada">Detroid</option>
            <option value="Russia">Sankt - Petersburgio</option>
            <option value="Germany">Berlinio</option>
            <option value="France">Parasionio</option>
          </select>
        </div>
        <div className="grid gap-5">
          <label htmlFor="zip">ZIP code</label>
          <input
            className="border border-grey py-3 px-2 rounded-[10px] max-w-[453px] w-full"
            id="zip"
            type="text"
            required
          />
        </div>
        <div className="grid gap-5">
          <label htmlFor="phone">Phone</label>
          <input
            className="border border-grey py-3 px-2 rounded-[10px] max-w-[453px] w-full"
            id="phone"
            type="tel"
            required
          />
        </div>
        <div className="grid gap-5">
          <label htmlFor="email">Email address</label>
          <input
            className="border border-grey py-3 px-2 rounded-[10px] max-w-[453px] w-full"
            id="email"
            type="email"
            required
          />
        </div>
        <textarea
          placeholder="Additional information"
          className="border border-grey py-3 px-2 rounded-[10px] max-w-[453px] w-full placeholder:text-grey"
          name=""
          id=""></textarea>
      </div>
    </form>
  );
};

import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "./ui/Input";
import { Select } from "./ui/Select";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  firstName: z.string().min(2, { message: "TI DURA VVEDI PRAVILNO!" }),
  lastName: z.string().min(2),
  companyName: z.string().min(2),
  country: z.string().min(2),
  adress: z.string(),
  city: z.string(),
  province: z.string(),
  zip: z.string(),
  phone: z.string(),
  email: z.string().email(),
});

export const ContactForm = () => {
  const { register, handleSubmit, control, formState } = useForm<
    z.infer<typeof formSchema>
  >({
    resolver: zodResolver(formSchema),
  });
  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = (data) =>
    console.log(data);

  console.log(formState.errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="" action="">
      <h3 className="text-4xl font-semibold mb-9">Billing details</h3>
      <div className="grid gap-9">
        <div className="flex gap-8">
          <div className="grid gap-5 h-fit">
            <label htmlFor="name">First Name</label>
            <Controller
              name="firstName"
              defaultValue=""
              control={control}
              render={({ field, fieldState }) => (
                <div className="grid gap-1">
                  <Input
                    {...field}
                    isError={!!fieldState.error}
                    className=" max-w-[211px]"
                    id="name"
                    type="text"
                  />
                  {fieldState.error && (
                    <span className="text-red text-xs">
                      {fieldState.error.message}
                    </span>
                  )}
                </div>
              )}
            />
          </div>
          <div className="grid gap-5 h-fit">
            <label htmlFor="lastName">Last Name</label>
            <Controller
              name="lastName"
              defaultValue=""
              control={control}
              render={({ field, fieldState }) => (
                <div className="grid gap-1">
                  <Input
                    {...field}
                    isError={Boolean(fieldState.error)}
                    className=" max-w-[211px]"
                    id="lastName"
                    type="text"
                  />
                  {fieldState.error && (
                    <span className="text-red text-xs">
                      {fieldState.error.message}
                    </span>
                  )}
                </div>
              )}
            />
          </div>
        </div>
        <button type="submit">LALAPRA</button>
        <div className="grid gap-5 h-fit">
          <label htmlFor="companyName">Company Name (Optional)</label>
          <Controller
            name="companyName"
            defaultValue=""
            control={control}
            render={({ field, fieldState }) => (
              <div className="grid gap-1">
                <Input
                  {...field}
                  isError={!!fieldState.error}
                  className=" max-w-[453px]"
                  id="companyName"
                  type="text"
                />
                {fieldState.error && (
                  <span className="text-red text-xs">
                    {fieldState.error.message}
                  </span>
                )}
              </div>
            )}
          />
        </div>
        <div className="grid gap-5 h-fit">
          <label htmlFor="country">Country / Region</label>
          <Controller
            name="country"
            defaultValue=""
            control={control}
            render={({ field, fieldState }) => (
              <div className="grid gap-1">
                <Select
                  {...field}
                  isError={!!fieldState.error}
                  className="max-w-[453px]"
                  id="country"
                  options={[
                    { value: "", text: "Your country..." },
                    { value: "ZALUPI", text: "ZALUPI" },
                    { value: "Russia", text: "Russia" },
                    { value: "Germany", text: "Germany" },
                    { value: "France", text: "France" },
                  ]}
                />
                {fieldState.error && (
                  <span className="text-red text-xs">
                    {fieldState.error.message}
                  </span>
                )}
              </div>
            )}
          />
        </div>
        <div className="grid gap-5">
          <label htmlFor="adress">Street address</label>
          <Controller
            name="adress"
            defaultValue=""
            control={control}
            render={({ field, fieldState }) => (
              <div className="grid gap-1">
                <Input
                  {...field}
                  isError={!!fieldState.error}
                  className=" max-w-[453px]"
                  id="adress"
                  type="text"
                />
                {fieldState.error && (
                  <span className="text-red text-xs">
                    {fieldState.error.message}
                  </span>
                )}
              </div>
            )}
          />
        </div>
        <div className="grid gap-5">
          <label htmlFor="city">Town / City</label>
          <Controller
            name="city"
            defaultValue=""
            control={control}
            render={({ field, fieldState }) => (
              <div className="grid gap-1">
                <Input
                  {...field}
                  isError={!!fieldState.error}
                  className=" max-w-[453px]"
                  id="city"
                  type="text"
                />
                {fieldState.error && (
                  <span className="text-red text-xs">
                    {fieldState.error.message}
                  </span>
                )}
              </div>
            )}
          />
        </div>
        <div className="grid gap-5">
          <label htmlFor="province">Province</label>
          <Controller
            name="province"
            defaultValue=""
            control={control}
            render={({ field, fieldState }) => (
              <div className="grid gap-1">
                <Select
                  {...field}
                  isError={!!fieldState.error}
                  className="max-w-[453px]"
                  id="province"
                  options={[
                    {
                      value: "",
                      text: "Your province...",
                      className: "text-grey",
                    },
                    { value: "Shri Lanka", text: "Shri Lanka" },
                    { value: "Dong Feng", text: "Dong Feng" },
                  ]}
                />
                {fieldState.error && (
                  <span className="text-red text-xs">
                    {fieldState.error.message}
                  </span>
                )}
              </div>
            )}
          />
        </div>
        <div className="grid gap-5">
          <label htmlFor="zip">ZIP code</label>
          <Controller
            name="zip"
            defaultValue=""
            control={control}
            render={({ field, fieldState }) => (
              <div className="grid gap-1">
                <Input
                  {...field}
                  isError={!!fieldState.error}
                  className=" max-w-[453px]"
                  id="zip"
                  type="text"
                />
                {fieldState.error && (
                  <span className="text-red text-xs">
                    {fieldState.error.message}
                  </span>
                )}
              </div>
            )}
          />
        </div>
        <div className="grid gap-5">
          <label htmlFor="phone">Phone</label>
          <Controller
            name="phone"
            defaultValue=""
            control={control}
            render={({ field, fieldState }) => (
              <div className="grid gap-1">
                <Input
                  {...field}
                  isError={Boolean(fieldState.error)}
                  className=" max-w-[453px]"
                  id="phone"
                  type="text"
                />
                {fieldState.error && (
                  <span className="text-red text-xs">
                    {fieldState.error.message}
                  </span>
                )}
              </div>
            )}
          />
        </div>
        <div className="grid gap-5">
          <label htmlFor="email">Email address</label>
          <Controller
            name="email"
            defaultValue=""
            control={control}
            render={({ field, fieldState }) => (
              <div className="grid gap-1">
                <Input
                  {...field}
                  isError={Boolean(fieldState.error)}
                  className=" max-w-[453px]"
                  id="email"
                  type="email"
                />
                {fieldState.error && (
                  <span className="text-red text-xs">
                    {fieldState.error.message}
                  </span>
                )}
              </div>
            )}
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

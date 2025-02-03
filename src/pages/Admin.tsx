import { z } from "zod";
import { Input } from "../components/ui/Input";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { IErrorType } from "../types/IErrorType";
import { useParams } from "react-router";
import { IMebel } from "../types/IMebel";

const formSchema = z.object({
  title: z.string().min(2, { message: "Please, enter TITLE!" }),
  price: z.coerce.number().min(0, { message: "Please, enter PRICE!" }),
  description: z.string().min(2, { message: "Please, enter DESCRIPTION!" }),
  image: z.string().min(2, { message: "Please, paste IMAGE LINK!" }),
});

const postFurnitures = async (data: z.infer<typeof formSchema>) => {
  const response = await fetch("http://localhost:3000/furnitures", {
    method: "POST",
    body: JSON.stringify({
      image: [data.image],
      descriptionImage: [
        "/assets/furniture/cart1.png",
        "/assets/furniture/cart2.png",
        "/assets/furniture/cart3.png",
        "/assets/furniture/cart4.png",
      ],
      title: data.title,
      description: data.description,
      price: data.price,
      unprice: data.price,
      count: 1,
      size: [
        {
          size: "150x40x50",
        },
      ],
      color: [
        {
          color: "black",
        },
        {
          color: "oak",
        },
      ],
      review: [
        {
          comment: "Beautiful and functional.",
          nickName: "Igor",
          rating: 5,
        },
      ],
      information: "MDF with coating, stable frame.",
      sku: "SKU12352",
      category: "TV Stands",
      tags: ["living room", "TV furniture"],
      share: [
        {
          image: "shareFacebook",
          link: "/furniture/:id",
        },
        {
          image: "shareInstagram",
          link: "/furniture/:id",
        },
        {
          image: "shareTwitter",
          link: "/furniture/:id",
        },
      ],
    }),
  });
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  } else {
    return response.json();
  }
};

const getFurnituresById = async (id: string) => {
  const get = await fetch(`http://localhost:3000/furnitures/${id}`);
  if (!get.ok) {
    throw { message: get.statusText, status: get.statusText };
  } else {
    return get.json();
  }
};

const putFurnituresById = async (id: string, data: IMebel) => {
  const put = await fetch(`http://localhost:3000/furnitures/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
  if (!put.ok) {
    throw { message: put.statusText, status: put.status };
  } else {
    return put.json();
  }
};

export const Admin = () => {
  const { id } = useParams();

  const { handleSubmit, control, reset } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  // setValue("price", 0);
  // reset({title: "TITITILE"})
  const [furniture, setFurniture] = useState<IMebel>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<IErrorType>();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  // const salam = () => {
  //   setValue("title", "CHINAZES");
  //   setValue("price", 9);
  // };
  // console.log(furniture);

  // useEffect(() => {
  //   salam();
  // }, []);

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (data) => {
    setIsLoading(true);
    setError(undefined);
    setIsSuccess(false);
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(4);
      }, 4000);
    });

    // ЭТО БЫЛО ЛИШНЕЕ
    // try {
    //   await getFurnituresById(String(id));
    // } catch (error3) {
    //   setError(error3 as IErrorType);
    // }
    if (id && furniture) {
      try {
        await putFurnituresById(id, {
          ...furniture,
          ...data,
          image: [data.image],
        });
        setIsSuccess(true);
      } catch (error) {
        setError(error as IErrorType);
      }
    } else {
      try {
        await postFurnitures(data);
        setIsSuccess(true);
      } catch (error) {
        setError(error as IErrorType);
      }
    }
    setIsLoading(false);
  };

  // useEffect(() => {
  //   setIsLoading(true);
  // }, [id]);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const furnitureData: IMebel = await getFurnituresById(String(id));
        setFurniture(furnitureData);

        if (furnitureData) {
          reset({
            title: furnitureData.title,
            price: furnitureData.price,
            description: furnitureData.description,
            image: furnitureData.image[0],
          });
        }
      } catch (error) {
        setError(error as IErrorType);
      }
    };

    if (id) {
      dataFetch();
    } else {
      reset({
        title: "",
        price: undefined,
        description: "",
        image: "",
      });
    }
  }, [id, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-10 w-full py-10 border max-w-[1024px] mx-auto rounded-xl border-grey border-opacity-50 mb-10">
      {error && (
        <>
          <span>{error.message}</span>
          <span>{error.status}</span>
        </>
      )}
      {isSuccess && <span>FWEFWAFAWF</span>}
      <div className="grid gap-3 max-w-[800px] w-full mx-auto p-4 border border-orange rounded-xl border-opacity-50">
        <label
          className="text-3xl font-semibold text-darkGrey text-opacity-80"
          htmlFor="title">
          Title
        </label>
        <Controller
          name="title"
          control={control}
          render={({ field, fieldState }) => (
            <div className="grid gap-1">
              <Input
                {...field}
                isError={!!fieldState.error}
                className=" w-full"
                id="title"
                type="text"
                placeholder="Enter title..."
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
      <div className="grid gap-3 max-w-[800px] w-full mx-auto p-4 border border-orange rounded-xl border-opacity-50">
        <label
          className="text-3xl font-semibold text-darkGrey text-opacity-80"
          htmlFor="price">
          Price
        </label>
        <Controller
          name="price"
          control={control}
          render={({ field, fieldState }) => (
            <div className="grid gap-1">
              <Input
                {...field}
                // onChange={(e) => {
                //   field.onChange(+e.target.value);
                // }}
                isError={!!fieldState.error}
                className=" w-full"
                id="price"
                type="number"
                placeholder="Enter price..."
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
      <div className="grid gap-3 max-w-[800px] w-full mx-auto p-4 border border-orange rounded-xl border-opacity-50">
        <label
          className="text-3xl font-semibold text-darkGrey text-opacity-80"
          htmlFor="description">
          Description
        </label>
        <Controller
          name="description"
          control={control}
          render={({ field, fieldState }) => (
            <div>
              <Input
                {...field}
                isError={!!fieldState.error}
                className=" w-full"
                id="description"
                type="text"
                placeholder="Enter description..."
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
      <div className="grid gap-3 max-w-[800px] w-full mx-auto p-4 border border-orange rounded-xl border-opacity-50">
        <label
          className="text-3xl font-semibold text-darkGrey text-opacity-80"
          htmlFor="image">
          Image
        </label>
        <Controller
          name="image"
          control={control}
          render={({ field, fieldState }) => (
            <div>
              <Input
                {...field}
                isError={!!fieldState.error}
                className=" w-full"
                id="image"
                type="text"
                placeholder="Paste image link..."
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
      <button
        disabled={isLoading}
        type="submit"
        className="text-3xl py-4 px-8 hover:bg-green hover:text-white transition-colors ease-in w-max mx-auto border border-grey border-opacity-50 rounded-2xl">
        {isLoading ? "LOADING . . ." : "Push"}
      </button>
    </form>
  );
};

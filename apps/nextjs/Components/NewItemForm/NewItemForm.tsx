import React, { type FunctionComponent } from "react";
import { useTranslation } from "react-i18next";

interface NewItemFormProps {}

const NewItemForm: FunctionComponent<NewItemFormProps> = () => {
  const { t } = useTranslation();
  return (
    <div className="mx-auto mt-8 max-w-lg">
      <h1 className="mb-8 text-4xl font-bold">New Item Form</h1>
      <form className="space-y-6">
        <div>
          <label className="mb-2 block font-bold text-gray-700" htmlFor="title">
            {t("NewItemForm.title")}
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded-md border py-2 px-3 leading-tight text-gray-700 focus:outline-none"
            type="text"
            id="title"
            name="title"
            placeholder="Enter a title for your item"
          />
        </div>
        <div>
          <label
            className="mb-2 block font-bold text-gray-700"
            htmlFor="description"
          >
            {t("NewItemForm.description")}
          </label>
          <textarea
            className="focus:shadow-outline w-full appearance-none rounded-md border py-2 px-3 leading-tight text-gray-700 focus:outline-none"
            id="description"
            name="description"
            rows={5}
            placeholder="Enter a description for your item"
          ></textarea>
        </div>
        <div>
          <label className="mb-2 block font-bold text-gray-700" htmlFor="phone">
            {t("NewItemForm.phone")}
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded-md border py-2 px-3 leading-tight text-gray-700 focus:outline-none"
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
          />
        </div>
        <div>
          <label className="mb-2 block font-bold text-gray-700" htmlFor="email">
            {t("NewItemForm.email")}
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded-md border py-2 px-3 leading-tight text-gray-700 focus:outline-none"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
          />
        </div>
        <div>
          <label className="mb-2 block font-bold text-gray-700" htmlFor="image">
            {t("NewItemForm.pic")}
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded-md border py-2 px-3 leading-tight text-gray-700 focus:outline-none"
            type="file"
            id="image"
            name="image"
          />
        </div>
        <div>
          <button className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
            {t("NewItemForm.upload")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewItemForm;

import { Model, Types } from 'mongoose';
export type IBook = {
  _id: Types.ObjectId;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  createdBy?: Types.ObjectId;
  updatedBy?: Types.ObjectId;
};
export type BookModel = Model<IBook, Record<string, unknown>>;

export type IBookFilters = {
    searchTerm?: string;
  };

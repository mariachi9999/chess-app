import BoolSchema from './../model/book.mjs'

export async function save(bookToInsert) {
    try {
        const bookModel = new BoolSchema(bookToInsert);
        return await bookModel.save();
    } catch (error) {
        console.error(error);
    }
}

export async function read(id) {
    try {
        return await BoolSchema.findById(id).lean();
    } catch (error) {
        console.error(error);
    }
}

export async function update(id, bookToUpdate) {
    try {
        return await BoolSchema.findByIdAndUpdate(id, bookToUpdate).lean();
    } catch (error) {
        console.error(error);
    }
}

export async function remove(id) {
    try {
        return await BoolSchema.findByIdAndRemove(id).lean();
    } catch (error) {
        console.error(error);
    }
}
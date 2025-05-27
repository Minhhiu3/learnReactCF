
import { z } from "zod";

const productSchema = z.object({
    title: z.string().trim().min(1, { message: "ko duoc de trong!" }),
    description: z.string().trim().min(1, { message: "description ko duoc de trong!" }),
    status: z.enum(["true", "false"], { message: "chon trang thai hop le!" }),
    level: z.enum(["low", "medium", "hight"], { message: "chon level hop le!" })

});



export default productSchema
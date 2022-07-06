
import { test1 } from "./a"

import { test2 } from './b';



export function test3(name: string) {

    return name + test1(name + "小明") + test2(name + "小红")
}

export {
    test1, test2
}




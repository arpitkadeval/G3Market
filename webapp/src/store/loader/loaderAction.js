export const initLoader = () =>{
    return {
        type: "LOADER_START",
        payload: true,
    }
};
export const stopLoader = () =>{
    return {
        type: "LOADER_STOP",
        payload: false,
    }
};
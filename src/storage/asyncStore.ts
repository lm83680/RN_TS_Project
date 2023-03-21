import AsyncStorage from '@react-native-async-storage/async-storage';
// get
export const getMyObject = async (key: string) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch (e) {
        return "Done. but have a Error ==>" + String(e);
    }
}
// set
export const setObjectValue = async (key: string, value: object | Array<any> | string | number) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
        return "Done. but have a Error ==>" + String(e);
    }
}
// mergeItem 合并值
export const mergeItem = async (key: string, value: object | Array<any> | string | number) => {
    try {
        await AsyncStorage.mergeItem(key, JSON.stringify(value))
    } catch (e) {
        return "Done. but have a Error ==>" + String(e);
    }
}
// remove a key-value
export const removeValue = async (key: string) => {
    try {
        await AsyncStorage.removeItem(key)
    } catch (e) {
        return "Done. but have a Error ==>" + String(e);
    }
}
// remove All
export const clearAll = async () => {
    try {
        await AsyncStorage.clear()
    } catch (e) {
        return "Done. but have a Error ==>" + String(e);
    }
}
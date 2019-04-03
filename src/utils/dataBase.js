const addData = (db, dataBaseName, data) => {
  console.log(db, dataBaseName)
  return async (event, context) => {
    try {
      return await db.collection(dataBaseName).add({
        // data 字段表示需新增的 JSON 数据
        data: data
      })
    } catch (e) {
      console.error(e)
    }
  }
}
export { addData }
// module.exports = {
//   addData
// }

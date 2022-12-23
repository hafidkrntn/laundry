import {
    faEye,
    faPenToSquare,
    faTrashAlt,
  } from "@fortawesome/free-regular-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import React from "react";
  export const Tbody = ({
    data,
    dataId,
    handleDataId,
    status,
    columnTable,
    actionNotDisplay,
    from,
    options,
    setInputTable = false,
    handleChangeDataTable,
    badge,
  }) => {
    return (
      <tbody className="border shadow-md">
        {status === "process" ? (
          <tr className="0 border-b bg-white hover:bg-gray-50  ">
            <td
              className="py-4 px-6 text-center"
              colSpan={columnTable.length + 2}
            >
              <div className="flex justify-center">
                <svg
                  aria-hidden="true"
                  className="mr-2 h-8 w-8 animate-spin fill-blue-600 text-gray-200"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </td>
          </tr>
        ) : data.length ? (
          data.map((loopData, index) => (
            <tr key={index} className="0 border-b bg-white hover:bg-gray-50  ">
              <td className="border py-4 px-6 text-center font-semibold text-black">
                {index === 0 ? from : from + index}
              </td>
              {!options
                ? columnTable.map((column, j) => {
                    return (
                      <td className="py-4 px-6" key={column.value + j}>
                        {setInputTable ? (
                          index === 0 ? (
                            column.value === "nilai_terendah" ? (
                              <input
                                onChange={(e) =>
                                  handleChangeDataTable(
                                    e.target.value,
                                    column.value,
                                    index,
                                    loopData["nilai_terendah"]
                                  )
                                }
                                type={"number"}
                                className="h-5 w-16 bg-gray-200 py-1 px-3"
                                defaultValue={loopData[column.value]}
                              />
                            ) : column.value === "jnd" ? (
                              <div className="flex bg-gray-200">
                                <input
                                  onChange={(e) =>
                                    handleChangeDataTable(
                                      e.target.value,
                                      column.value,
                                      index,
                                      loopData["nilai_terendah"]
                                    )
                                  }
                                  type={"number"}
                                  className="h-5 w-16 bg-gray-200 py-1 px-3"
                                  defaultValue={loopData[column.value]}
                                />
                                <span className="mr-1">%</span>
                              </div>
                            ) : (
                              loopData[column.value]
                            )
                          ) : column.value === "jnd" ? (
                            <div className="flex bg-gray-200">
                              <input
                                onChange={(e) =>
                                  handleChangeDataTable(
                                    e.target.value,
                                    column.value,
                                    index,
                                    loopData["nilai_terendah"]
                                  )
                                }
                                type={"number"}
                                className="h-5 w-16 bg-gray-200 py-1 px-3"
                                defaultValue={loopData[column.value]}
                              />
                              <span className="mr-1">%</span>
                            </div>
                          ) : (
                            loopData[column.value]
                          )
                        ) : column.value.includes(":label") ? (
                          <span className="bg-green-5 py-1 px-3 text-green-3">
                            {loopData[column.value.replace(":label", "")]
                              ? loopData[column.value.replace(":label", "")]
                              : ""}
                          </span>
                        ) : loopData[column.value] ? 
                            loopData[column.value][column.multipleObjValue] ?
                              loopData[column.value][column.multipleObjValue]
                          :
                        (
                          typeof loopData[column.value] === "object" ? (
                            Object.keys(loopData[column.value]).map(
                              (item, idx, array) =>
                                typeof loopData[column.value][item] ===
                                "object" ? (
                                  loopData[column.value][item][column.multipleObjValue] && column.thirdObjValue ? 
                                  loopData[column.value][item][column.multipleObjValue][column.thirdObjValue]
                                  :
                                  loopData[column.value][item][column.multipleObjValue]
                                ) : array.length - 1 === idx ? ( // untuk tambah badge pada type data object example {a:"data1",parent:{id:1,nama:"data2"}}
                                  typeof badge === "object" ? (
                                    badge.field === item ? (
                                      <span
                                        key={item + idx}
                                        className={`bg-${badge.color}-5 py-1 px-3 text-${badge.color}-3`}
                                      >
                                        {loopData[column.value][item]}
                                      </span>
                                    ) : (
                                      loopData[column.value][item]
                                    )
                                  ) : (
                                    loopData[column.value][item]
                                  )
                                ) : (
                                  ""
                                ) //disini
                            )
                          ) : column.value === "jnd" ? (
                            `${loopData[column.value]}%`
                          ) : (
                              loopData[column.value]
                          )
                        ) : (
                          loopData[column.value]
                        )}
                      </td>
                    );
                  })
                : columnTable.map((key) =>
                    key.value.includes(":label") ? (
                      <td className="py-4 px-6" key={key.value}>
                        <span className="bg-green-5 py-1 px-3 text-green-3">
                          {loopData[key.value.replace(":label", "")]
                            ? loopData[key.value.replace(":label", "")]
                            : ""}
                        </span>
                      </td>
                    ) : (
                      <td className="py-4 px-6" key={key.value}>
                        {loopData[key.value]
                          ? typeof loopData[key.value] === "object"
                            ? Object.keys(loopData[key.value]).map((item) =>
                                typeof loopData[key.value][item] === "object"
                                  ? loopData[key.value][item][
                                      key.multipleObjValue
                                    ]
                                  : loopData[key.value][item]
                              )
                            : loopData[key.value]
                          : ""}
                      </td>
                    )
                  )}
  
              {!actionNotDisplay && (
                <td className="py-4 text-center">
                  {Object.keys(loopData).map(
                    (key) =>
                      dataId.indexOf(key) > -1 &&
                      dataId.indexOf(key) < 1 && (
                        <div key={key}>
                          <div
                            className="tooltip static hover:relative"
                            data-tip="Ubah"
                          >
                            <button
                              className="mr-1 text-orange-3 hover:bg-orange-5"
                              onClick={() => handleDataId(loopData[key], "edit")}
                            >
                              <label
                                htmlFor="my-modal"
                                className="hover:cursor-pointer hover:bg-orange-5"
                              >
                                <FontAwesomeIcon
                                  icon={faPenToSquare}
                                  className="rounded-md border border-orange-4 p-1"
                                />
                              </label>
                            </button>
                          </div>
                          <div
                            className="tooltip static hover:relative"
                            data-tip="Hapus"
                          >
                            <button
                              className="mr-1 text-red-2 hover:bg-red-5"
                              onClick={() =>
                                handleDataId(loopData[key], "delete")
                              }
                            >
                              <label
                                htmlFor="my-modal"
                                className="hover:cursor-pointer hover:bg-red-5"
                              >
                                <FontAwesomeIcon
                                  icon={faTrashAlt}
                                  className="rounded-md border border-red-4 p-1"
                                />
                              </label>
                            </button>
                          </div>
                          <div
                            className="tooltip static hover:relative"
                            data-tip="Lihat"
                          >
                            <button
                              className="mr-1 text-blue-3 hover:bg-blue-5"
                              onClick={() => handleDataId(loopData[key], "view")}
                            >
                              <label
                                htmlFor="my-modal"
                                className="hover:cursor-pointer hover:bg-blue-5"
                              >
                                <FontAwesomeIcon
                                  icon={faEye}
                                  className="rounded-md border border-blue-4 p-1"
                                />
                              </label>
                            </button>
                          </div>
                        </div>
                      )
                  )}
                </td>
              )}
            </tr>
          ))
        ) : (
          <tr className="0 border-b bg-white hover:bg-gray-50  ">
            <td
              className="py-4 px-6 text-center"
              colSpan={columnTable.length + 2}
            >
              Tidak Ditemukan Data
            </td>
          </tr>
        )}
      </tbody>
    );
  };
  
  export default Tbody;
  
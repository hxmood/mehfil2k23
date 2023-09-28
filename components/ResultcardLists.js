import ResultCard from "./ResultCard";

const ResultcardLists = ({ datas }) => {
  const firstletter = (str) => {
    const getfirst = str
      .split(" ")
      .map((word) => word.charAt(0))
      .join(".");
    return getfirst;
  };
  return (
    <div className="flex flex-col-reverse w-full gap-y-3">
      {datas.map((post) => (
        <div className="flex flex-col bg-white shadow-md rounded-lg p-3">
          <div className="flex w-full justify-between">
            <h1 className="font-semibold text-lg">{post.item}</h1>
            <h2 className="">{post.category}</h2>
          </div>
          <hr className="mt-2 " />
          {/*--------------------------  */}
          <div className="flex flex-col">
            <div className="flex  mt-2 flex-1  px-2 items-center">
              <div className="flex basis-1/2">
                <h1 className="mr-2">1</h1>
                <h1>{post.first.name}</h1>
              </div>

              <div className="flex basis-1/2 ">
                <div className="grid w-full grid-cols-3 place-items-end">
                  <h2>{post.first.grade}</h2>
                  <h2>{post.first.marks}</h2>
                  <p className="text-gray-500">
                    {firstletter(post.first.team)}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex  mt-2 flex-1 px-2 items-center">
              <div className="flex basis-1/2">
                <h1 className="mr-2">2</h1>
                <h1>{post.second.secName}</h1>
              </div>

              <div className="flex basis-1/2 ">
                <div className="grid w-full grid-cols-3 place-items-end">
                  <h2>{post.second.secGrade}</h2>
                  <h2>{post.second.secMarks}</h2>
                  <p className="text-gray-500">
                    {firstletter(post.second.secTeam)}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex  mt-2 flex-1 px-2 items-center">
              <div className="flex basis-1/2">
                <h1 className="mr-2">3</h1>
                <h1>{post.third.thrName}</h1>
              </div>

              <div className="flex basis-1/2 ">
                <div className="grid w-full grid-cols-3 place-items-end">
                  <h2>{post.third.thrGrade}</h2>
                  <h2>{post.third.thrMarks}</h2>
                  <p className="text-gray-500">
                    {firstletter(post.third.thrTeam)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResultcardLists;

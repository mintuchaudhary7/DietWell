const SolvedQuery = (menu) => {
  return (
      <div>
        {console.log(menu)}
      
      <div>
        {/* {menu.map((item) => ( */}
          <div
            key={menu._id}
            className="border border-gray-200 rounded p-4 mb-4"
          >
            <p>
              <strong>Email:</strong> {menu.menu.Email}
            </p>
            <p>
              <strong>Name:</strong> {menu.menu.Name}
            </p>
            <p>
              <strong>Question:</strong> {menu.menu.Question}
            </p>
            <p>
              <strong>Answer:</strong> {menu.menu.Answer}
            </p>
          </div>
        {/* ))} */}
      </div>
    </div>
  );
};
export default SolvedQuery;

function IdCard() {
  const idProperties = [
    {
      lastName: 'Doe',
      firstName: 'John',
      gender: 'male',
      height: 178,
      birth: new Date('1992-07-14'),
      picture: 'https://randomuser.me/api/portraits/men/44.jpg',
    },
    {
      lastName: 'Delores',
      firstName: 'Obrien',
      gender: 'female',
      height: 172,
      // birth:new Date("1988-05-11"),
      picture: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
  ];

  return (
    <div>
      <p>
        {idProperties.map((eachElement, index) => {
          return (
            <div key={index}>
              <table>
                <td>
                  <img src={eachElement.picture} />
                </td>

                <p> firstName: {eachElement.firstName}</p>
                <p> lastName: {eachElement.lastName}</p>
                <p>gender: {eachElement.gender}</p>
                <p>height: {eachElement.height}</p>
              </table>
            </div>
          );
        })}
      </p>
    </div>
  );
}

export default IdCard;

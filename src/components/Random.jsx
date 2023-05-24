

function Random({min, max}) {

    const randomNum = () => {
        const randomNumber =  Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber
      };

  return (

    <div>

{randomNum()}


    </div>
  )
}

export default Random
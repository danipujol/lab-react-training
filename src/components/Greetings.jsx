

function Greetings() {

    const Greetings = ({lang, children}) => {
    if (lang === 'de'){
        return `Hallor ${children}`
    }
    if (lang === 'fr'){
        return `Bonjour ${children}`
    }
    if (lang === 'es'){
        return `Hola ${children}`
    }
    if (lang === 'en'){
        return `Hello ${children}`
    }

}
  return (
  <div>
    <Greetings lang="de">Ludwig</Greetings>
    <br />
<Greetings lang="fr">François</Greetings>
</div>

  )
}







export default Greetings
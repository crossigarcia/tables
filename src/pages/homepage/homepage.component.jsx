import React from "react";
import data from "../../assets/data";
import "./homepage.styles.scss";

class Homepage extends React.Component {
   constructor(props) {
      super(props);

      this.state = {}
   }

   render() {
      return (
         <section>
            {data.map(character => {
               return <p key={character.id}>{character.name}</p>
            })}
         </section>
      )
   }
   
}

export default Homepage;
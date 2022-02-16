import React from "react";
import data from "../../assets/data";
import Table from "../../components/table/table.component";
import "./homepage.styles.scss";

class Homepage extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         tableData: []
      }
   }

   //if data was not hardcoded this is where you could make a fetch / axios.get
   componentDidMount() {
      this.setState({tableData: data})
   }

   //axios.delete
   handleDelete = (id) => {
      
      let newTableData = this.state.tableData.filter(person => person.id !== id);
      this.setState({tableData: newTableData});

   }

   render() {
      return (
         <div className="homepage">
            <Table
               thead={["Name", "House", "Ancestry", "Patronous"]}
               tbody={this.state.tableData}
               handleDelete={this.handleDelete}
            />
         </div>
      )
   }
   
}

export default Homepage;
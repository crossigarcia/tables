import React from "react";
import data from "../../assets/data";
import Table from "../../components/table/table.component";
import Popup from "../../components/popup/popup.component";
import "./homepage.styles.scss";

class Homepage extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         tableData: [],
         open: false,
         nameToDelete: "",
         idToDelete: -1
      }
   }

   //if data was not hardcoded this is where you could make a fetch / axios.get
   componentDidMount() {
      this.setState({tableData: data})
   }

   handleDelete = (id, name) => {
      this.setState({ open: true });
      this.setState({ nameToDelete: name});
      this.setState({ idToDelete: id});
   }

   handleConfirmDelete = () => {
      let newTableData = this.state.tableData.filter(person => person.id !== this.state.idToDelete);
      this.setState({tableData: newTableData});
      this.setState({ open: false });
      this.setState({ nameToDelete: ""});
      this.setState({ idToDelete: -1});
   }

   handleClose = () => {
      this.setState({ open: false })
   }
   
   render() {

      return (
         <div className="homepage">
            <Table
               thead={["Name", "House", "Ancestry", "Patronous"]}
               tbody={this.state.tableData}
               handleDelete={this.handleDelete}
            />
            <Popup open={this.state.open} handleClose={this.handleClose} handleConfirmDelete={this.handleConfirmDelete} name={this.state.name}/>
         </div>
      )
   }
   
}

export default Homepage;
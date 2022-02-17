import React from "react";
import data from "../../assets/data";
import Table from "../../components/table/table.component";
import Popup from "../../components/popup/popup.component";
import { Pagination } from "../../components/pagination/pagination.component";
import "./homepage.styles.scss";

class Homepage extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         tableData: [],
         open: false,
         nameToDelete: "",
         idToDelete: -1,
         startIndex: 0,
         endIndex: 4,
      }
   }

   componentDidMount() {
      this.loadData()
   }

   componentDidUpdate(prevProps, prevState) {
      if (this.state.startIndex !== prevState.startIndex) {
         this.loadData()
      }
   }

   loadData = () => {
      let limitedData = [];
      for (let i = this.state.startIndex; i <= this.state.endIndex; i ++) {
         limitedData.push(data[i]);
      }
      this.setState({tableData: limitedData})
   }

   handlePagination = (event) => {
      event.preventDefault();
      const { name } = event.target;

      if (name === "pagination-forward-btn") {
         this.setState({ startIndex: this.state.startIndex + 5});
         this.setState({ endIndex: this.state.endIndex + 5});
      } else {
         this.setState({ startIndex: this.state.startIndex - 5});
         this.setState({ endIndex: this.state.endIndex - 5});
      }
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
            <Pagination handlePagination={this.handlePagination}/>
            <Popup open={this.state.open} handleClose={this.handleClose} handleConfirmDelete={this.handleConfirmDelete} name={this.state.nameToDelete}/>
         </div>
      )
   }
   
}

export default Homepage;
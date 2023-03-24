import DataTable from 'react-data-table-component';
import customStyles from '../../assets/styles/tables.styles';

const CustomDataTable = ({ columns, data, loading, totalCount, handlePageChange, handlePerPageChange }) => {
    return (
        <DataTable
            customStyles={customStyles}
            columns={columns}
            data={data}
            highlightOnHover
            progressPending={loading}
            pagination
            paginationServer
            paginationTotalRows={totalCount}
            onChangeRowsPerPage={handlePerPageChange}
            onChangePage={handlePageChange}
        />
    )
}

export default CustomDataTable;
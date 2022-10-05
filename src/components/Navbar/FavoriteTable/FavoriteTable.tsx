import { Person } from '@/models';
import { addFavorite, removeFavorite } from '@/Redux/state';
import { AppStore } from '@/Redux/store';
import { Checkbox, IconButton } from '@mui/material';
import { GridRenderCellParams, DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Delete from '@mui/icons-material/Delete';

export interface FavoriteTableInterface {}

const FavoriteTable : React.FC<FavoriteTableInterface> = () => {
	const dispatch = useDispatch()
	const pageSize = 5;
	const stateFavorites = useSelector((store: AppStore) => {
		return store.favorites;
	});

	const handleClick = (person: Person) => {
		dispatch(removeFavorite(person))
	}

	const columns = [
		{
			field: 'actions',
			type: 'actions',
			sortable: false,
			headerName: '',
			width: 50,
			renderCell: (params: GridRenderCellParams) => <>{
				<IconButton color="secondary" aria-label="favorites" component="label" onClick={() => handleClick(params.row)}>
						<Delete />
					</IconButton>
			}</>
		},
		{
			field: 'name',
			headerName: 'Name',
			flex: 1,
			minWidth: 150,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		},
		{
			field: 'category',
			headerName: 'Categories',
			flex: 1,
			minWidth: 150,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		},
		{
			field: 'company',
			headerName: 'Companies',
			flex: 1,
			minWidth: 150,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		},
	];

	return <DataGrid
			disableColumnSelector
			disableSelectionOnClick
			autoHeight
			pageSize={pageSize}
			rowsPerPageOptions={[pageSize]}
			rows={stateFavorites}
			columns={columns}
			getRowId={(row: any) => row.id}
		/>;
};

export default FavoriteTable;

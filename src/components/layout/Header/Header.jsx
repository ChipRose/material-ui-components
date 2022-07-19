import React from 'react';
import { AppBar, IconButton, Toolbar, Typography, Container } from '@mui/material';
import { ShoppingBasket } from '@mui/icons-material';
function Header() {
	return (
		<AppBar position="static">
			<Container maxWidth="md">
				<Toolbar>
					<Typography
						variant="h6"
						component="span"
						sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
					>
						Farm Products
					</Typography>
					<IconButton color="inherit">
						<ShoppingBasket />
					</IconButton>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default Header;

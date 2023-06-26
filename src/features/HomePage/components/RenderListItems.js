/* eslint-disable no-unused-vars */
import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Stack,
	Typography,
} from "@mui/material";
import React from "react";
import useCart from "../../../hooks/useCart";

const RenderListItems = ({ items = [] }) => {
	const [_, addCartItem] = useCart();
	if (!items || items.length <= 0) {
		return <Typography>No Items.</Typography>;
	}

	const onAddToCart = (product) => {
		addCartItem(product);
	};

	return (
		<Stack
			columnGap={10}
			rowGap={10}
			justifyContent="space-between"
			flexWrap="wrap"
			direction="row"
			data-testid="products"
		>
			{items.map((item, i) => (
				<Card data-testid="card" key={item.name} sx={{ width: "450px" }}>
					<CardMedia image={item.img} sx={{ height: 200 }} title={item.name} />
					<CardContent>
						<Typography>{item.name}</Typography>
						<Typography>Color: {item.colour}</Typography>
					</CardContent>
					<CardActions
						sx={{
							justifyContent: "space-between",
							padding: (theme) => theme.spacing(0, 2),
						}}
					>
						<Typography>Price: ${item.price}</Typography>
						<Button data-testid="add-to-cart" onClick={() => onAddToCart(item)}>
							Add To Card
						</Button>
					</CardActions>
				</Card>
			))}
		</Stack>
	);
};

export default RenderListItems;

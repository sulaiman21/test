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
import useCart from "../../hooks/useCart";
import BaseLayout from "../../layouts";
import ProdTotalCost from "./components/ProdTotalCost";

const CartPage = () => {
	const [items, addCartItem, removeCartItem] = useCart();

	return (
		<BaseLayout>
			{items.length <= 0 && (
				<Typography data-testid="no-items">No items</Typography>
			)}
			<Stack spacing={5} data-testid="cart-stack">
				{items &&
					items.map((item) => (
						<Card sx={{ display: "flex" }} key={item.product.name}>
							<CardMedia
								image={item.product.img}
								sx={{ height: 150, width: 180 }}
								title={item.product.name}
							/>
							<Stack flex={1} direction="row" justifyContent="space-between">
								<CardContent>
									<Typography>{item.product.name}</Typography>
									<Typography variant="subtitle2">
										Price: $ {item.product.price}
									</Typography>
								</CardContent>
								<CardActions>
									<Stack direction="row" alignItems="center" columnGap={2}>
										<Button
											data-testid="remove-item-btn"
											onClick={() => removeCartItem(item.product)}
										>
											-
										</Button>

										<Typography data-testid="item-counter">
											{item.count}
										</Typography>
										<Button
											data-testid="add-item-btn"
											onClick={() => addCartItem(item.product)}
										>
											+
										</Button>
									</Stack>
								</CardActions>
							</Stack>
						</Card>
					))}
				<ProdTotalCost />
			</Stack>
		</BaseLayout>
	);
};

export default CartPage;

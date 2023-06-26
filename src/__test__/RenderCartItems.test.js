import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import CartPage from "../features/CartPage";
import { Provider } from "react-redux";
import store from "../redux";
import { updateCartList } from "../redux/reducers/cartList/cartList.slice";

jest.mock("react-router-dom", () => ({
	Link: jest
		.fn()
		.mockImplementation(({ to, children }) => <a href={to}>{children}</a>),
}));

const items = [
	{
		name: "Item 1",
		img: "item1.jpg",
		colour: "Red",
		price: 10,
	},
	{
		name: "Item 2",
		img: "item2.jpg",
		colour: "Blue",
		price: 20,
	},
	{
		name: "Item 1",
		img: "item1.jpg",
		colour: "green",
		price: 30,
	},
	{
		name: "Item 2",
		img: "item2.jpg",
		colour: "stone",
		price: 40,
	},
];

describe("CartPage", () => {
	beforeEach(() => {
		store.dispatch(updateCartList([{ product: items[0], count: 1 }]));
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it("should render No Items when there is no cart items", async () => {
		render(
			<Provider store={store}>
				<CartPage />
			</Provider>
		);

		expect(screen.getByTestId("cart-stack")).toBeInTheDocument();
	});

	it("onClick on 'removeItemBtn', should remove item from cart", () => {
		render(
			<Provider store={store}>
				<CartPage />
			</Provider>
		);

		const itemCounter = screen.getByText("1");
		const removeItemBtn = screen.getByTestId("remove-item-btn");
		expect(removeItemBtn).toBeInTheDocument();
		expect(itemCounter).toBeInTheDocument();

		fireEvent.click(removeItemBtn);
		expect(itemCounter).not.toBeInTheDocument();
	});

	it("onClick on 'addCartItem', should add item from cart", () => {
		render(
			<Provider store={store}>
				<CartPage />
			</Provider>
		);

		const itemCounter = screen.getByTestId("item-counter");
		const addItemBtn = screen.getByTestId("add-item-btn");
		expect(addItemBtn).toBeInTheDocument();
		expect(itemCounter).toBeInTheDocument();

		fireEvent.click(addItemBtn);
		expect(itemCounter.textContent).toBe("2");
	});
});

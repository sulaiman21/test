import { fireEvent, render, screen } from "@testing-library/react";
import useCart from "../hooks/useCart";
import RenderListItems from "../features/HomePage/components/RenderListItems";

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

jest.mock("../hooks/useCart");

describe("Render List Items", () => {
	const mockListItems = jest.fn();

	beforeEach(() => {
		useCart.mockReturnValue([null, mockListItems]);
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it("should render empty array", () => {
		render(<RenderListItems items={[]} />);

		expect(screen.getByText("No Items.")).toBeInTheDocument();
	});

	it("should render list items", () => {
		render(<RenderListItems items={items} />);

		const cardsLength = screen.getAllByTestId("card");
		expect(cardsLength).toHaveLength(items.length);
	});

	it("should add item to cart when click on addToCart Button", () => {
		render(<RenderListItems items={[items[0]]} />);

		const addToCartButton = screen.getByTestId("add-to-cart");

		fireEvent.click(addToCartButton);
		expect(mockListItems).toHaveBeenCalledTimes(1);
		expect(mockListItems).toHaveBeenCalledWith(items[0]);
	});
});

import { render, screen } from "@testing-library/react";
import ProdTotalCost from "../features/CartPage/components/ProdTotalCost";
import useCart from "../hooks/useCart";

jest.mock("../hooks/useCart");

const mockItems = [
	{
		product: {
			price: "10",
		},
		count: 1,
	},
	{
		product: {
			price: "20",
		},
		count: 2,
	},
];

describe("RenderTotal", () => {
	beforeEach(() => {
		useCart.mockReturnValue([mockItems]);
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it("render the total cost", () => {
		render(<ProdTotalCost />);

		const total = screen.getByTestId("total");
		expect(total).toBeInTheDocument();
		expect(total.textContent).toBe("Total: $ 50.00");
	});

	it("should render empty total cost", () => {
		useCart.mockReturnValue([[]]);
		render(<ProdTotalCost />);

		const total = screen.queryByTestId("total");
		expect(total).not.toBeInTheDocument();
	});
});

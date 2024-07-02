import Cafe from "$lib/assets/categories/Cafe.png";
import Donate from "$lib/assets/categories/Donate.png";
import Education from "$lib/assets/categories/Education.png";
import Electronics from "$lib/assets/categories/Electronics.png";
import Fuel from "$lib/assets/categories/Fuel.png";
import Gifts from "$lib/assets/categories/Gifts.png";
import Groceries from "$lib/assets/categories/Groceries.png";
import Health from "$lib/assets/categories/Health.png";
import Institute from "$lib/assets/categories/Institute.png";
import Laundry from "$lib/assets/categories/Laundry.png";
import Liquor from "$lib/assets/categories/Liquor.png";
import Maintenance from "$lib/assets/categories/Maintenance.png";
import Money from "$lib/assets/categories/Money.png";
import Party from "$lib/assets/categories/Party.png";
import Restaurant from "$lib/assets/categories/Restaurant.png";
import Savings from "$lib/assets/categories/Savings.png";
import Self_development from "$lib/assets/categories/Self development.png";
import Sport from "$lib/assets/categories/Sport.png";
import Transportation from "$lib/assets/categories/Transportation.png";

export type CategoryType =
	| "Cafe"
	| "Donate"
	| "Education"
	| "Electronics"
	| "Fuel"
	| "Gifts"
	| "Groceries"
	| "Health"
	| "Institute"
	| "Laundry"
	| "Liquor"
	| "Maintenance"
	| "Money"
	| "Party"
	| "Restaurant"
	| "Savings"
	| "Self_development"
	| "Sport"
	| "Transportation";

export const CategoryIcons = {
	Cafe,
	Donate,
	Education,
	Electronics,
	Fuel,
	Gifts,
	Groceries,
	Health,
	Institute,
	Laundry,
	Liquor,
	Maintenance,
	Money,
	Party,
	Restaurant,
	Savings,
	Self_development,
	Sport,
	Transportation,
};

export function getCatagoryIcon(name: string | CategoryType) {
	if (CategoryIcons.hasOwnProperty(name)) {
		return CategoryIcons[name as keyof typeof CategoryIcons];
	}
	return "";
}

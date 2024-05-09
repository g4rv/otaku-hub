import { ComponentProps, FC } from "react";

type HeaderProps = {} & ComponentProps<"header">;

const Header: FC<HeaderProps> = (props) => {
	return (
		<header {...props} className="flex items-center container mx-auto gap-4 py-4">
			<p className="text-2xl font-medium">Otaku<span className="font-bold text-red-500">HUB</span></p>
			<p className="ml-auto">themeSwirch</p>
			<p>UserProfile</p>
		</header>
	);
};
export default Header;

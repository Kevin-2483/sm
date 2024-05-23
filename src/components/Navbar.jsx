import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Switch,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  User,
  useDisclosure,
} from "@nextui-org/react";
import {
  SunFilled,
  MoonOutlined,
  CaretDownOutlined,
  TranslationOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import PropTypes from "prop-types";
import Window from "./logwindow.jsx";

function Navbar1({
  isDarkMode,
  setIsDarkMode,
  currentLanguage,
  setCurrentLanguage,
}) {
  const { t } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
  };
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isLogin, setIsLogin] = React.useState(false);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full">
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <p className="font-bold text-inherit">LOGO</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Tab1
            </Link>
          </NavbarItem>

          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              Tab2
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link color="foreground" href="#">
              Tab3
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Switch
              defaultSelected={!isDarkMode}
              size="lg"
              color="success"
              startContent={<SunFilled />}
              endContent={<MoonOutlined />}
              onValueChange={(e) => {
                setIsDarkMode(!e);
              }}
            />
          </NavbarItem>
          <Dropdown
            className={`${
              isDarkMode ? "dark" : ""
            } text-foreground bg-background`}
          >
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                  startContent={<TranslationOutlined />}
                  endContent={<CaretDownOutlined />}
                  radius="sm"
                  variant="light"
                >
                  {t("language")}
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="Language"
              selectionMode="single"
              selectedKeys={[currentLanguage]}
              onSelectionChange={(keys) => changeLanguage(keys[0])}
            >
              <DropdownItem key="en">
                <button onClick={() => changeLanguage("en")}>
                  {t("en_US")}
                </button>
              </DropdownItem>
              <DropdownItem key="zh_TW">
                <button onClick={() => changeLanguage("zh_TW")}>
                  {t("zh_TW")}
                </button>
              </DropdownItem>
              <DropdownItem key="zh_CN">
                <button onClick={() => changeLanguage("zh_CN")}>
                  {t("zh_CN")}
                </button>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavbarItem className="hidden lg:flex">
            <Link
              onPress={() => {
                onOpen();
                setIsLogin(true);
              }}
            >
              {t("login")}
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Button
              onPress={() => {
                onOpen();
                setIsLogin(false);
              }}
              as={Link}
              color="primary"
              variant="flat"
            >
              {t("signup")}
            </Button>
          </NavbarItem>

          <Dropdown
            placement="bottom-end"
            className={`${
              isDarkMode ? "dark" : ""
            } text-foreground bg-background`}
          >
            <DropdownTrigger>
              <User
                as="button"
                avatarProps={{
                  isBordered: true,
                  src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                }}
                className="transition-transform"
                description="@tonyreichert"
                name="Tony Reichert"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="User Actions" variant="shadow">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-bold">Signed in as</p>
                <p className="font-bold">@tonyreichert</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">
                Help & Feedback
              </DropdownItem>
              <DropdownItem key="logout" className="text-danger" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>

        <NavbarMenu>
          <NavbarMenuItem>
            <Link color="foreground">Tab1</Link>
          </NavbarMenuItem>

          <NavbarMenuItem>
            <Link color="foreground">Tab2</Link>
          </NavbarMenuItem>

          <NavbarMenuItem>
            <Link color="foreground">Tab2</Link>
          </NavbarMenuItem>

          <NavbarMenuItem>
            <Link
              onPress={() => {
                onOpen();
                setIsLogin(true);
              }}
            >
              {t("login")}
            </Link>
          </NavbarMenuItem>

          <NavbarMenuItem>
            <Link color="danger">{t("logout")}</Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
      <Window
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDarkMode={isDarkMode}
        isLogin={isLogin}
      />
    </>
  );
}

Navbar1.propTypes = {
  isDarkMode: PropTypes.bool,
  setIsDarkMode: PropTypes.func,
  currentLanguage: PropTypes.string,
  setCurrentLanguage: PropTypes.func,
};

export default Navbar1;

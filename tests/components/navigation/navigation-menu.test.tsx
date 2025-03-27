import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from '@/components/navigation/navigation-menu';

describe('NavigationMenu', () => {
  it('renders correctly', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Test Trigger</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Test Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );

    expect(screen.getByText('Test Trigger')).toBeInTheDocument();
  });

  it('shows content when trigger is clicked', async () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Test Trigger</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Test Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );

    const trigger = screen.getByText('Test Trigger');
    await userEvent.click(trigger);

    // Content should now be visible
    expect(screen.getByText('Test Link')).toBeVisible();
  });
});

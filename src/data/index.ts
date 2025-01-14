import { MessageSquareMore, Users, Phone } from "lucide-react";
import type { LucideIcon } from 'lucide-react';

interface NavButton {
  index: number;
  icon: LucideIcon;
}

const Nav_Buttons: NavButton[] = [
  {
    index: 0,
    icon: MessageSquareMore,
  },
  {
    index: 1,
    icon: Users,
  },
  {
    index: 2,
    icon: Phone,
  },
];

export default Nav_Buttons;
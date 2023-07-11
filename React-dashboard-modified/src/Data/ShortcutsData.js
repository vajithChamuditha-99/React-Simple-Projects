import { BiChat } from 'react-icons/bi';
import { BsCloudUpload } from 'react-icons/bs';
import { BsFillPeopleFill } from 'react-icons/bs';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { ImBook } from 'react-icons/im';

export const ShortcutsData = [
  {
    id: 1,
    shortcutIcon: <BiChat size="3em" color="green" />,
    shortcutTitle: 'Message your  Account Manager',
  },
  {
    id: 2,
    shortcutIcon: <BsCloudUpload size="3em" color="green" />,
    shortcutTitle: 'Upload Documents',
  },
  {
    id: 3,
    shortcutIcon: <BsFillPeopleFill size="3em" color="green" />,
    shortcutTitle: 'Invite Team Members',
  },
  {
    id: 4,
    shortcutIcon: <IoMdCheckmarkCircleOutline size="3em" color="green" />,
    shortcutTitle: 'Survey Employees',
  },
  {
    id: 5,
    shortcutIcon: <ImBook size="3em" color="green" />,
    shortcutTitle: 'Acess Knowledge Base',
  },
];

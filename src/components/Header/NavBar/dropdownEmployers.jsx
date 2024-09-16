import { Dropdown, Space } from 'antd'
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';

const items = [
    {
        key: 'Employer Create',
        label: (<Link to={"/recruit/registor"}>Employer Create</Link>),
    },
    {
        key: 'Employer Login',
        label: (<Link to={"/recruit/login"}>Employer Login</Link>),
    },
];
const DropdownEmployers = () => {
    return (
        <Dropdown
            menu={{
                items,
            }}
        >
            <a onClick={(e) => e.preventDefault()}>
                <Space>
                    For employers
                    <IoIosArrowDown />
                </Space>
            </a>
        </Dropdown>
    )
}

export default DropdownEmployers
import { Card, Col, Row, Skeleton } from "antd";
import { IoBriefcaseOutline } from "react-icons/io5";
import { LuMapPin } from "react-icons/lu";

const JobListingCard = () => {
  return (
    <>
      <Row gutter={15}>
        <Col span={6} className="mb-5">
          <Card hoverable>
            <div className="flex justify-between mb-3">
              <div className="w-16 rounded-lg overflow-hidden"><img src="images/dtcc.gif" alt="" /></div>
              <div className="postDate">14 day</div>
            </div>
            <div className="mb-4">
              <div className="jobTitle text-lg font-semibold">Senior Software Developer</div>
              <div className="">DTCC</div>
            </div>

            <div className="flex justify-between items-center text-lg">
              <div className="location flex gap-2 items-center">
                <div className="locationIcon"><LuMapPin /></div>
                <div className="locationName">Delhi</div>
              </div>
              <div className="location flex gap-2 items-center">
                <div className="locationIcon"><IoBriefcaseOutline /></div>
                <div className="locationName">5 - 8 Yrs</div>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={6} className="mb-5">
          <Card hoverable>
            <div className="flex justify-between mb-3">
              <div className="w-16 rounded-lg overflow-hidden"><img src="images/dtcc.gif" alt="" /></div>
              <div className="postDate">14 day</div>
            </div>
            <div className="mb-4">
              <div className="jobTitle text-lg font-semibold">Senior Software Developer</div>
              <div className="">DTCC</div>
            </div>

            <div className="flex justify-between items-center text-lg">
              <div className="location flex gap-2 items-center">
                <div className="locationIcon"><LuMapPin /></div>
                <div className="locationName">Delhi</div>
              </div>
              <div className="location flex gap-2 items-center">
                <div className="locationIcon"><IoBriefcaseOutline /></div>
                <div className="locationName">5 - 8 Yrs</div>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={6} className="mb-5">
          <Card hoverable>
            <div className="flex justify-between mb-3">
              <div className="w-16 rounded-lg overflow-hidden"><img src="images/dtcc.gif" alt="" /></div>
              <div className="postDate">14 day</div>
            </div>
            <div className="mb-4">
              <div className="jobTitle text-lg font-semibold">Senior Software Developer</div>
              <div className="">DTCC</div>
            </div>

            <div className="flex justify-between items-center text-lg">
              <div className="location flex gap-2 items-center">
                <div className="locationIcon"><LuMapPin /></div>
                <div className="locationName">Delhi</div>
              </div>
              <div className="location flex gap-2 items-center">
                <div className="locationIcon"><IoBriefcaseOutline /></div>
                <div className="locationName">5 - 8 Yrs</div>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={6} className="mb-5">
          <Card hoverable>
            <div className="flex justify-between mb-3">
              <div className="w-16 rounded-lg overflow-hidden"><img src="images/dtcc.gif" alt="" /></div>
              <div className="postDate">14 day</div>
            </div>
            <div className="mb-4">
              <div className="jobTitle text-lg font-semibold">Senior Software Developer</div>
              <div className="">DTCC</div>
            </div>

            <div className="flex justify-between items-center text-lg">
              <div className="location flex gap-2 items-center">
                <div className="locationIcon"><LuMapPin /></div>
                <div className="locationName">Delhi</div>
              </div>
              <div className="location flex gap-2 items-center">
                <div className="locationIcon"><IoBriefcaseOutline /></div>
                <div className="locationName">5 - 8 Yrs</div>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={6} className="mb-5">
          <Card hoverable>
            <div className="flex justify-between mb-3">
              <div className="w-16 rounded-lg overflow-hidden"><img src="images/dtcc.gif" alt="" /></div>
              <div className="postDate">14 day</div>
            </div>
            <div className="mb-4">
              <div className="jobTitle text-lg font-semibold">Senior Software Developer</div>
              <div className="">DTCC</div>
            </div>

            <div className="flex justify-between items-center text-lg">
              <div className="location flex gap-2 items-center">
                <div className="locationIcon"><LuMapPin /></div>
                <div className="locationName">Delhi</div>
              </div>
              <div className="location flex gap-2 items-center">
                <div className="locationIcon"><IoBriefcaseOutline /></div>
                <div className="locationName">5 - 8 Yrs</div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default JobListingCard;

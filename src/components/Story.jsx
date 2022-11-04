import { Card, CardGroup } from 'react-bootstrap';
import { getFormatTime } from '../utils/getFormateDate';
import { BiTime } from 'react-icons/bi';

const Story = ({ storyData }) => {
  return (
    <CardGroup>
      <Card
        style={{ backgroundColor: '#f6f6ef' }}
        className={`m-2 p-2 ${storyData?.url ? 'cursor_pointer' : ''}`}
        onClick={() => storyData.url && window.open(storyData.url, '_blank')}
      >
        <Card.Title className='story_title'>
          {storyData.index}. &nbsp;
          {storyData.title}
        </Card.Title>
        {storyData.text && <Card.Text className='mb-0' dangerouslySetInnerHTML={{ __html: storyData.text }}></Card.Text>}
        <Card.Subtitle className='story_subtitle text-muted d-flex align-items-center justify-content-between'>
          <span> &nbsp; &nbsp; by {storyData.by}</span>
          <span>
            <BiTime /> &nbsp;{getFormatTime(storyData.time)}
          </span>
        </Card.Subtitle>
      </Card>
    </CardGroup>
  );
};

export default Story;

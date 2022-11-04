import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroll-component';
import Header from '../components/Header';
import Story from '../components/Story';

import { base_api_url, fetchDataLength, item, newstories, beststories, topstories } from '../utils/constants';

const Home = () => {
  const dataFetchLengthRef = useRef(0);
  const [stories, setStories] = useState([]);
  const [newStories, setNewStories] = useState([]);

  const fetchAllStories = useCallback(async (storyType = newstories) => {
    const resNewStories = await fetch(base_api_url + storyType);
    const dataNewStories = await resNewStories.json();
    setNewStories((prev) => dataNewStories || []);
    const items = dataNewStories.slice(dataFetchLengthRef.current, fetchDataLength);
    fetchStoriesDetail(items);
  }, []);

  const fetchStoriesDetail = async (storiesDataArray) => {
    const storiesData = await Promise.all(
      storiesDataArray.map(async (el) => {
        let resSingleStory = await fetch(base_api_url + item + el + '.json');
        let dataSingleStory = await resSingleStory.json();
        return dataSingleStory;
      }),
    );
    setStories((prev) => [...prev, ...storiesData]);
    let value = dataFetchLengthRef.current;
    if (dataFetchLengthRef.current !== value) {
      dataFetchLengthRef.current = value + fetchDataLength;
    }
  };

  const reFetchStories = useCallback(() => {
    let reFetchData = newStories.slice(dataFetchLengthRef.current, fetchDataLength);
    fetchStoriesDetail(reFetchData);
  }, [newStories]);

  useEffect(() => {
    fetchAllStories();
  }, [fetchAllStories]);

  useEffect(() => {
    reFetchStories();
  }, [reFetchStories]);

  const handleClickStoryButton = (e) => {
    switch (e.target.id) {
      case 'beststories':
        fetchAllStories(beststories);
        break;
      case 'topstories':
        fetchAllStories(topstories);
        break;
      default:
        fetchAllStories(newstories);
        break;
    }
  };

  return (
    <Fragment>
      <Header handleClickStoryButton={handleClickStoryButton} />
      <Container className='d-flex align-items-center justify-content-center'>
        <InfiniteScroll
          dataLength={stories.length}
          next={reFetchStories}
          hasMore={true}
          loader={<h4 className='page_center'>Loading...</h4>}
        >
          {stories?.length < 1 ? null : stories.map((el, i) => <Story key={i} storyData={{ ...el, index: i + 1 }} />)}
        </InfiniteScroll>
      </Container>
    </Fragment>
  );
};

export default Home;

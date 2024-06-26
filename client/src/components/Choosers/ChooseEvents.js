import React, { useCallback, useEffect } from 'react';
import Selector from 'react-select';
import network from '../../services/network';
import { customStyles } from './ChoosersStyle';

const ChooseEvents = ({
  chooseEvents,
  setChooseEvents,
  eventsOptions,
  setEventsOptions,
}) => {
  const fetchEventsData = useCallback(async () => {
    try {
      const { data: allEvents } = await network.get(
        '/api/v1/webhooks/admin/events',
      );
      setEventsOptions(
        allEvents.map((event) => ({
          value: event.id,
          label: event.name,
        })),
      );
    } catch (error) {}
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    fetchEventsData();
  }, []);

  const selectionChange = useCallback((chosen) => {
    setChooseEvents(chosen);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Selector
        value={chooseEvents}
        maxMenuHeight={300}
        placeholder="select events"
        isMulti
        name="events"
        onChange={selectionChange}
        closeMenuOnSelect={false}
        options={eventsOptions}
        styles={customStyles}
      />
    </div>
  );
};

export default ChooseEvents;

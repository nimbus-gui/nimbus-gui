

import { useEffect, useState } from 'react';
import { FixedSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';

import { Stack, XStack } from 'tamagui';
const exampleData =
  [
    {
      "option": "--config-file",
      "description": "Loads the configuration from a TOML file."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--config-file",
      "description": "Loads the configuration from a TOML file."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--config-file",
      "description": "Loads the configuration from a TOML file."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--config-file",
      "description": "Loads the configuration from a TOML file."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--config-file",
      "description": "Loads the configuration from a TOML file."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--config-file",
      "description": "Loads the configuration from a TOML file."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },

    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--config-file",
      "description": "Loads the configuration from a TOML file."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },

    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--config-file",
      "description": "Loads the configuration from a TOML file."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },

    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--config-file",
      "description": "Loads the configuration from a TOML file."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },

    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--config-file",
      "description": "Loads the configuration from a TOML file."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },

    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--config-file",
      "description": "Loads the configuration from a TOML file."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },

    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--config-file",
      "description": "Loads the configuration from a TOML file."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },

    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--config-file",
      "description": "Loads the configuration from a TOML file."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },

    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--config-file",
      "description": "Loads the configuration from a TOML file."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },

    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--config-file",
      "description": "Loads the configuration from a TOML file."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },

    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--config-file",
      "description": "Loads the configuration from a TOML file."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },

    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--config-file",
      "description": "Loads the configuration from a TOML file."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },

    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--config-file",
      "description": "Loads the configuration from a TOML file."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },

    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--config-file",
      "description": "Loads the configuration from a TOML file."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },

    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--config-file",
      "description": "Loads the configuration from a TOML file."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },

    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--config-file",
      "description": "Loads the configuration from a TOML file."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },

    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--config-file",
      "description": "Loads the configuration from a TOML file."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },

    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--config-file",
      "description": "Loads the configuration from a TOML file."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },

    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--config-file",
      "description": "Loads the configuration from a TOML file."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },

    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--config-file",
      "description": "Loads the configuration from a TOML file."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },

    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--config-file",
      "description": "Loads the configuration from a TOML file."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },

    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--config-file",
      "description": "Loads the configuration from a TOML file."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },

    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--config-file",
      "description": "Loads the configuration from a TOML file."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },

    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--config-file",
      "description": "Loads the configuration from a TOML file."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },

    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--config-file",
      "description": "Loads the configuration from a TOML file."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },

    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--config-file",
      "description": "Loads the configuration from a TOML file."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },

    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--config-file",
      "description": "Loads the configuration from a TOML file."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },

    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--config-file",
      "description": "Loads the configuration from a TOML file."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },

    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--config-file",
      "description": "Loads the configuration from a TOML file."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },
    {
      "option": "--log-level",
      "description": "Sets the log level for process and topics (e.g., DEBUG; TRACE:discv5,libp2p; REQUIRED:none; DISABLED:none) [INFO]."
    },

  ]


type DataType = {
  option: string
  description: string
}

function Row({ data, index }: { data: DataType | undefined, index: number }) {

  if (!data) {
    return <div>Loading...</div>;
  }

  const { option, description } = data;
  return (
    <XStack style={{ fontFamily: 'monospace' }}>
      <Stack style={{ alignContent: 'flex-start', padding: '0 12px 0 12px ', marginRight: '20px', backgroundColor: '#f5f6f8', color: '#A1ABBD' }}>
        {index}
      </Stack>
      <Stack style={{ alignContent: 'flex-start', marginRight: '20px', minWidth: '110px', }}>
        {option}
      </Stack>
      <Stack >
        {description}
      </Stack>
    </XStack >
  );
}

function LogsTerminal() {
  const [data, setData] = useState<DataType[]>([]);


  useEffect(() => {
    setData(exampleData.concat(Array.from({ length: 500 - exampleData.length }).map(_ => undefined)));
  }, []);

  const isItemLoaded = (index: number) => index < data.length && data[index] !== undefined;

  const loadMoreItems = (startIndex: number, stopIndex: number) => {
    return new Promise<void>((resolve) => {

      setTimeout(() => {
        setData(prevData => {
          const newData = [...prevData];
          for (let i = startIndex; i <= stopIndex; i++) {
            if (!newData[i]) {

              newData[i] = { option: `Option ${i}`, description: `Description for ${i}` };
            }
          }
          return newData;
        });
        resolve();
      }, 1000);
    });
  };

  return (
    <Stack>

      <List
        height={350}
        itemCount={exampleData.length}
        itemSize={35}
      >
        {({ index }: any) => (
          <Row data={exampleData[index]} index={index} />
        )}
      </List>

    </Stack>
  );
}


export default LogsTerminal;
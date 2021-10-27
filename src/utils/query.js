import { gql } from "@apollo/client";

export const FILMS_QUERY = gql`
  {
    launchesPast(limit: 10) {
      mission_name
      launch_date_unix
      launch_date_utc
      launch_date_local
      launch_site {
        site_name
      }

      rocket {
        rocket_name
        first_stage {
          cores {
            flight
            core {
              reuse_count
              status
            }
          }
        }
      }
      ships {
        name
        home_port
        image
      }
    }
  }
`;

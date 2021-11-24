type SpaceRestApiMap = {
  GetSpace: {
    method: "GET";
    endpoint: "space";
    requestParameters: { id: string | number };
    responseProperties: {
      id: string;
      name: string;
      defaultThread: string;
      isPrivate: boolean;
      creator: {
        code: string;
        name: string;
      };
      modifier: {
        code: string;
        name: string;
      };
      memberCount: string;
      coverType: "BLOB" | "PRESET";
      coverKey: string;
      coverUrl: string;
      body: string;
      useMultiThread: boolean;
      isGuest: boolean;
      attachedApps: Array<{
        threadId: string;
        appId: string;
        code: string;
        name: string;
        description: string;
        createdAt: string;
        creator: {
          code: string;
          name: string;
        };
        modifiedAt: string;
        modifier: {
          code: string;
          name: string;
        };
      }>;
      fixedMember: boolean;
      showAnnouncement: boolean | null;
      showThreadList: boolean | null;
      showAppList: boolean | null;
      showMemberList: boolean | null;
      showRelatedLinkList: boolean | null;
    };
  };
  DeleteSpace: {
    method: "DELETE";
    endpoint: "space";
    requestParameters: { id: string };
    responseProperties: {};
  };
  PostTemplateSpace: {
    method: "POST";
    endpoint: "template/space";
    requestParameters: {
      id: string | number;
      name: string;
      members: Array<
        | {
            entity: {
              type: "USER" | "GROUP";
              code: string;
            };
            isAdmin?: boolean;
          }
        | {
            entity: {
              type: "ORGANIZATION";
              code: string;
            };
            isAdmin?: boolean;
            includeSubs?: boolean;
          }
      >;
      isPrivate?: boolean;
      isGuest?: boolean;
      fixedMember?: boolean;
    };
    responseProperties: {
      id: string;
    };
  };
  PutSpaceBody: {
    method: "PUT";
    endpoint: "space/body";
    requestParameters: {
      id: string | number;
      body: string;
    };
    responseProperties: {};
  };
  PutSpaceThread: {
    method: "PUT";
    endpoint: "space/thread";
    requestParameters: { id: string | number; name?: string; body?: string };
    responseProperties: {};
  };
  PostSpaceThreadComment: {
    method: "POST";
    endpoint: "space/thread/comment";
    requestParameters: {
      space: string | number;
      thread: string | number;
      comment: {
        text?: string;
        mentions?: Array<{
          code: string;
          type: "USER" | "GROUP" | "ORGANIZATION";
        }>;
        files?: Array<{
          fileKey: string;
          width: string | number;
        }>;
      };
    };
    responseProperties: { id: string };
  };
  GetSpaceMembers: {
    method: "GET";
    endpoint: "space/members";
    requestParameters: {
      id: string | number;
    };
    responseProperties: {
      members: Array<
        | {
            entity: {
              type: "USER";
              code: string;
            };
            isAdmin: boolean;
            isImplicit: boolean;
          }
        | {
            entity: {
              type: "USER" | "GROUP";
              code: string;
            };
            isAdmin: boolean;
          }
        | {
            entity: {
              type: "ORGANIZATION";
              code: string;
            };
            isAdmin: boolean;
            includeSubs: boolean;
          }
      >;
    };
  };
  PutSpaceMembers: {
    method: "PUT";
    endpoint: "space/members";
    requestParameters: {
      id: string | number;
      members: Array<
        | {
            entity: {
              type: "USER" | "GROUP";
              code: string;
            };
            isAdmin?: boolean;
          }
        | {
            entity: {
              type: "ORGANIZATION";
              code: string;
            };
            isAdmin?: boolean;
            includeSubs?: boolean;
          }
      >;
    };
    responseProperties: {};
  };
  PostGuests: {
    method: "POST";
    endpoint: "guests";
    requestParameters: {
      guests: Array<{
        code: string;
        password: string;
        timezone: string;
        locale?: "auto" | "ja" | "en" | "zh";
        image?: string;
        name: string;
        surNameReading?: string;
        givenNameReading?: string;
        company?: string;
        division?: string;
        phone?: string;
        callto?: string;
      }>;
    };
    responseProperties: {};
  };
  DeleteGuests: {
    method: "DELETE";
    endpoint: "guests";
    requestParameters: {
      guests: string[];
    };
    responseProperties: {};
  };
  PutSpaceGuests: {
    method: "PUT";
    endpoint: "space/guests";
    requestParameters: { id: string | number; guests: string[] };
    responseProperties: {};
  };
};

export { SpaceRestApiMap };

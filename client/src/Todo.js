import { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from "react-router-dom";

const serverUrl = "http://localhost:5000/"

function Todo() {
  const navigate = useNavigate();
  const [task, setTask] = useState([]);

  useEffect(() => {
    getTasks();

    // let iqHash = []
    // let iqHashVal = []
    // const iqHash1 =['ClosePrice',
    // 'OriginalListPrice',
    // 'CloseDate',
    // 'PriceChangeTimestamp',
    // 'iqDownloadName',
    // 'PropertySubType',
    // 'BedroomsTotal',
    // 'LotSizeArea',
    // 'LotSizeAcres',
    // 'UnparsedAddress',
    // 'MLSAreaMajor',
    // 'iqStatus',
    // 'InternetAddressDisplayYN',
    // 'Basement',
    // 'Bathrooms',
    // 'BathroomsTotalInteger',
    // 'BathroomsFull',
    // 'BathroomsHalf',
    // 'BathroomsPartial',
    // 'BathroomsThreeQuarter',
    // 'bayFeedId',
    // 'bay_OriginalEntryTimestamp',
    // 'BuildingName',
    // 'NumberOfBuildings',
    // 'TotalBuildings',
    // 'BuyerAgentMlsId',
    // 'BuyerAgentFullName',
    // 'BuyerAgentFirstName',
    // 'BuyerAgentLastName',
    // 'BuyerOfficeMlsId',
    // 'BuyerOfficeName',
    // 'CarportSpaces',
    // 'GarageCarport',
    // 'City',
    // 'InternetAutomatedValuationDisplayYN',
    // 'SubdivisionName',
    // 'CountyOrParish',
    // 'OriginalEntryTimestamp',
    // 'OnMarketDate',
    // 'CumulativeDaysOnMarket',
    // 'DaysOnMarket',
    // 'PublicRemarks',
    // 'SecurityDeposit',
    // 'Disclaimer',
    // 'ExpirationDate',
    // 'feed_id',
    // 'Flooring',
    // 'SpecialListingConditions',
    // 'GarageType',
    // 'GarageCapacity',
    // 'GarageSpaces',
    // 'AssociationAmenities',
    // 'CommunityFeatures',
    // 'ExteriorFeatures',
    // 'View',
    // 'AssociationYN',
    // 'AssociationFee',
    // 'AssociationFeeIncludes',
    // 'AssociationFeeFrequency',
    // 'iqImages',
    // 'Latitude',
    // 'ListPrice',
    // 'SearchPrice',
    // 'LivingArea',
    // 'PricePerSquareFoot',
    // 'ListingAgentIdxEmail',
    // 'ListAgentEmail',
    // 'CoListAgentEmail',
    // 'ListAgentMlsId',
    // 'CoListAgentMlsId',
    // 'ListAgentFullName',
    // 'ListAgentFirstName',
    // 'ListAgentLastName',
    // 'CoListAgentFullName',
    // 'CoListAgentFirstName',
    // 'CoListAgentLastName',
    // 'ListingAgentIdxPhone',
    // 'ListAgentPreferredPhone',
    // 'CoListAgentPreferredPhone',
    // 'ListingKey',
    // 'ListingKeyNumeric',
    // 'ListOfficeEmail',
    // 'OfficeEmail',
    // 'CoListOfficeEmail',
    // 'ListOfficeMlsId',
    // 'CoListOfficeMlsId',
    // 'ListOfficeName',
    // 'CoListOfficeName',
    // 'ListOfficePhone',
    // 'CoListOfficePhone',
    // 'URL',
    // 'PropertyType',
    // 'Longitude',
    // 'iqMlsId',
    // 'OriginatingSystemName',
    // 'iqMlsNumber',
    // 'ModificationTimestamp',
    // 'ParkingTotal',
    // 'ParkingFeatures',
    // 'PetsAllowed',
    // 'PoolPrivateYN',
    // 'PoolFeatures',
    // 'iqDownloadTimestamp',
    // 'HighSchoolDistrict',
    // 'ElementarySchool',
    // 'ElementarySchoolDistrict',
    // 'MiddleOrJuniorSchool',
    // 'MiddleOrJuniorSchoolDistrict',
    // 'HighSchool',
    // 'ShortSaleYN',
    // 'smcFeedId',
    // 'RetailSqFt',
    // 'OfficeSqFt',
    // 'State',
    // 'StateOrProvince',
    // 'StandardStatus',
    // 'bay_status',
    // 'MlsStatus',
    // 'Stories',
    // 'StoriesTotal',
    // 'Levels',
    // 'Subdistrict',
    // 'AnnualTaxes',
    // 'NumberOfUnitsTotal',
    // 'VirtualTourURL',
    // 'VirtualTourURLBranded',
    // 'VirtualTourURLUnbranded',
    // 'FrontageType',
    // 'YearBuilt',
    // 'PostalCode',
    // 'zip_code',
    // 'Zoning',
    // 'ZoningDetails',
    // 'ZoningDescription',
    // 'StreetNumberNumeric',
    // 'StreetDirPrefix',
    // 'StreetName',
    // 'StreetDirSuffix',
    // 'StreetSuffix',
    // 'UnitNumber',
    // 'Unit1FullBaths',
    // 'Unit1PartialBaths',
    // 'Unit2FullBaths',
    // 'Unit2PartialBaths',
    // 'Unit3FullBaths',
    // 'Unit3PartialBaths',
    // 'Unit4FullBaths',
    // 'Unit4PartialBaths',
    // 'Unit1Bedrooms',
    // 'Unit2Bedrooms',
    // 'Unit3Bedrooms',
    // 'Unit4Bedrooms',
    // 'Appliances',
    // 'InteriorFeatures',
    // 'Cooling',
    // 'Heating',
    // 'FireplaceFeatures',
    // 'FireplacesTotal',
    // 'LaundryFeatures',
    // 'WindowFeatures',
    // 'RoomsTotal',
    // 'Furnished',
    // 'Roof',
    // 'FoundationDetails',
    // 'LotFeatures',
    // 'PatioAndPorchFeatures',
    // 'Fencing',
    // 'ConstructionMaterials',
    // 'SecurityFeatures',
    // 'SeniorCommunityYN',
    // 'Utilities',
    // 'Sewer',
    // 'Electric',
    // 'Floor',
    // 'BuildingAreaTotal',
    // 'SchoolDistrictCounty']

    // const keys = ['_id',
    // 'ADU2ndUnit',
    // 'AccessibilityFeatures',
    // 'Appliances',
    // 'ArchitecturalStyle',
    // 'AreaLongDisplay',
    // 'AreaShortDisplay',
    // 'AssociationAmenities',
    // 'AssociationFee',
    // 'AssociationFeeFrequency',
    // 'AssociationFeeIncludes',
    // 'AssociationName',
    // 'AssociationPhone',
    // 'AssociationYN',
    // 'Auction',
    // 'Basement',
    // 'BathroomsFull',
    // 'BathroomsPartial',
    // 'BathroomsTotalInteger',
    // 'BedroomsTotal',
    // 'BuilderName',
    // 'BuyerAgencyCompensationType',
    // 'BuyerAgentKeyNumeric',
    // 'BuyerFinancing',
    // 'CarportSpaces',
    // 'City',
    // 'CoListAgentFullName',
    // 'CoListAgentKeyNumeric',
    // 'CoListAgentMlsId',
    // 'CoListOfficeKeyNumeric',
    // 'CoListOfficeMlsId',
    // 'CoListOfficeName',
    // 'ConstructionMaterials',
    // 'ContingentDate',
    // 'ContractStatusChangeDate',
    // 'Cooling',
    // 'CopyrightNotice',
    // 'CountyOrParish',
    // 'CrossStreet',
    // 'CurrentUse',
    // 'DirectionFaces',
    // 'Directions',
    // 'Disclaimer',
    // 'DrivewaySidewalks',
    // 'Electric',
    // 'ElementarySchoolDistrict',
    // 'ExteriorFeatures',
    // 'Fencing',
    // 'FireplaceFeatures',
    // 'FireplacesTotal',
    // 'Flooring',
    // 'FoundationDetails',
    // 'GarageSpaces',
    // 'GreenEnergyEfficient',
    // 'Heating',
    // 'HighSchoolDistrict',
    // 'HorseAmenities',
    // 'HorseYN',
    // 'InteriorFeatures',
    // 'InternetAddressDisplayYN',
    // 'InternetAutomatedValuationDisplayYN',
    // 'InternetEntireListingDisplayYN',
    // 'LaundryFeatures',
    // 'Levels',
    // 'ListAOR',
    // 'ListAgentFirstName',
    // 'ListAgentFullName',
    // 'ListAgentKeyNumeric',
    // 'ListAgentLastName',
    // 'ListAgentMlsId',
    // 'ListOfficeKeyNumeric',
    // 'ListOfficeMlsId',
    // 'ListOfficeName',
    // 'ListPrice',
    // 'ListingAgentNickName',
    // 'ListingAgreement',
    // 'ListingId',
    // 'ListingKeyNumeric',
    // 'ListingTerms',
    // 'LivingArea',
    // 'LivingAreaSource',
    // 'Location',
    // 'LocationofUnit',
    // 'LotFeatures',
    // 'LotSizeAcres',
    // 'LotSizeSource',
    // 'LotSizeSquareFeet',
    // 'LotSizeUnits',
    // 'LowerLevel',
    // 'MLSAreaMajor',
    // 'MainLevel',
    // 'MiddleOrJuniorSchoolDistrict',
    // 'MlsStatus',
    // 'ModificationTimestamp',
    // 'MultipleListingService',
    // 'NumberOfUnitsInCommunity',
    // 'OnMarketDate',
    // 'OpenParkingSpaces',
    // 'OriginatingSystemKey',
    // 'OriginatingSystemName',
    // 'OtherStructures',
    // 'ParcelNumber',
    // 'ParkingFeatures',
    // 'ParkingTotal',
    // 'PatioAndPorchFeatures',
    // 'PhotosChangeTimestamp',
    // 'PhotosCount',
    // 'PictureCountPrivate',
    // 'PictureCountPublic',
    // 'PoolFeatures',
    // 'PoolPrivateYN',
    // 'Possession',
    // 'PostalCode',
    // 'PostalCodePlus4',
    // 'PropertyCondition',
    // 'PropertyPictures',
    // 'PropertySubType',
    // 'PropertyType',
    // 'PublicRemarks',
    // 'Restrictions',
    // 'Roof',
    // 'RoomBathsOtherFeatures',
    // 'RoomDiningRoomFeatures',
    // 'RoomFamilyRoomFeatures',
    // 'RoomKitchenFeatures',
    // 'RoomLivingRoomFeatures',
    // 'RoomMasterBathroomFeatures',
    // 'RoomMasterBedroomFeatures',
    // 'RoomType',
    // 'RoomsTotal',
    // 'SchoolDistrictCounty',
    // 'SecurityFeatures',
    // 'SeniorCommunityYN',
    // 'Sewer',
    // 'SourceSystemKey',
    // 'SourceSystemName',
    // 'SpaFeatures',
    // 'SpaYN',
    // 'SpecialListingConditions',
    // 'StandardStatus',
    // 'StateOrProvince',
    // 'Stories',
    // 'StreetAddressFiltered',
    // 'StreetDirPrefix',
    // 'StreetDirSuffix',
    // 'StreetName',
    // 'StreetNumber',
    // 'StreetNumberNumeric',
    // 'StreetSuffix',
    // 'SubAgencyCompensationType',
    // 'Subdistrict',
    // 'SubdivisionName',
    // 'SubtypeDescription',
    // 'URL',
    // 'UnitBlockLot',
    // 'UnitNumber',
    // 'UpperLevel',
    // 'Utilities',
    // 'VideosChangeTimestamp',
    // 'VideosCount',
    // 'View',
    // 'WaterSource',
    // 'WindowFeatures',
    // 'YearBuilt',
    // 'YearBuiltSource',
    // 'ZoningDescription',
    // '_2ndUnitApproxSqFt',
    // '_2ndUnitBedrooms',
    // '_2ndUnitDescription',
    // '_2ndUnitFullBaths',
    // '_2ndUnitKitchen',
    // '_2ndUnitOccupied',
    // '_2ndUnitPartialBaths',
    // '_2ndUnitPrivateEntry',
    // '_2ndUnitRentsfor',
    // '_2ndUnitSqFtSource',
    // '_2ndUnitType',
    // 'bayFeedId',
    // 'bayPurgeStatus',
    // 'bay_Deleted',
    // 'bay_DownloadTimestamp',
    // 'bay_MlsName',
    // 'bay_OriginalEntryTimestamp',
    // 'feed_id',
    // 'iqDownloadId',
    // 'iqDownloadName',
    // 'iqFeedVendor',
    // 'iqImagesOrder',
    // 'iqImagesStatus',
    // 'iqMlsId',
    // 'iqMlsNumber',
    // 'iqStatus',
    // 'iqTableName',
    // 'smcFeedId',
    // 'GeoLocation',
    // 'iqEndpointStatus',
    // 'office',
    // 'agent',
    // 'openhouses',
    // 'ActualorScheduled',
    // 'CapRate',
    // 'CoveredSpaces',
    // 'GrossIncome',
    // 'GrossRentMultiplier',
    // 'IndependentParkingSpaces',
    // 'NumberOf1BedroomsOccupied',
    // 'NumberOf2BedroomsOccupied',
    // 'NumberOf3BedroomsOccupied',
    // 'NumberOf4BedroomsOccupied',
    // 'NumberOfBuildings',
    // 'NumberOfGuestSpaces',
    // 'NumberOfUnitsTotal',
    // 'SeparateMeters',
    // 'StoriesTotal',
    // 'StudiosOccupied',
    // 'TandemParkingSpaces',
    // 'TenantPays',
    // 'Unit1ApproxSqFt',
    // 'Unit1Bedrooms',
    // 'Unit1Description',
    // 'Unit1FullBaths',
    // 'Unit1PartialBaths',
    // 'Unit1Type',
    // 'Unit1ofRooms',
    // 'Unit2ApproxSqFt',
    // 'Unit2Bedrooms',
    // 'Unit2Description',
    // 'Unit2FullBaths',
    // 'Unit2PartialBaths',
    // 'Unit2Type',
    // 'Unit2ofRooms',
    // 'Unit3ApproxSqFt',
    // 'Unit3Bedrooms',
    // 'Unit3Description',
    // 'Unit3FullBaths',
    // 'Unit3PartialBaths',
    // 'Unit3Type',
    // 'Unit3ofRooms',
    // 'Unit4ApproxSqFt',
    // 'Unit4Bedrooms',
    // 'Unit4Description',
    // 'Unit4FullBaths',
    // 'Unit4PartialBaths',
    // 'Unit4Type',
    // 'Unit4ofRooms',
    // 'UnitType1BedroomUnitsTotal',
    // 'UnitType2BedroomUnitsTotal',
    // 'UnitType3BedroomUnitsTotal',
    // 'UnitType4BedroomUnitsTotal',
    // 'UnitTypeCommercialUnitsTotal',
    // 'UnitTypeStudioUnitsTotal',
    // '_1BedroomAnnualOccupancy',
    // '_1BedroomRentRange',
    // '_2BedroomAnnualOccupancy',
    // '_2BedroomRentRange',
    // '_3BedroomAnnualOccupancy',
    // '_3BedroomRentRange',
    // '_4BedroomAnnualOccupancy',
    // '_4BedroomRentRange',
    // 'Furnished',
    // 'LeaseType',
    // 'PriceStyle',
    // 'SecurityDeposit',
    // 'Smoking',
    // 'APN2',
    // 'APN3',
    // 'AdditionalAPNs',
    // 'AnchorsCoTenants',
    // 'BuildingAreaSource',
    // 'BuildingAreaTotal',
    // 'BuildingClass',
    // 'BuildingFeatures',
    // 'BuildingName',
    // 'BusinessType',
    // 'CommercialCondo',
    // 'DailyTraffic',
    // 'DailyTrafficSource',
    // 'DockDoors',
    // 'Floor',
    // 'IncomeIncludes',
    // 'IndustrialSqFt',
    // 'LeaseDeposit',
    // 'LeaseTerm',
    // 'Leased',
    // 'LesseePays',
    // 'LessorPays',
    // 'LoadFactor',
    // 'Loading',
    // 'MaximumAvailableSqFt',
    // 'NumberOfElevators',
    // 'NumberOfOffices',
    // 'NumberOfRestrooms',
    // 'NumberOfTenants',
    // 'NumberOfTruckDoors',
    // 'OfficeSqFt',
    // 'ParkingClearanceHeightft',
    // 'ParkingClearanceHeightin',
    // 'ParkingRatio',
    // 'PercentOffice',
    // 'PropertyManagerName',
    // 'PropertyManagerPhone',
    // 'Rentable',
    // 'RetailSqFt',
    // 'RoadFrontageType',
    // 'Signs',
    // 'Space1Comments',
    // 'Space2Comments',
    // 'Space3Comments',
    // 'Space4Comments',
    // 'SpecialZones',
    // 'StructureType',
    // 'SubLease',
    // 'TypeOfSale',
    // 'TypesofLeases',
    // 'VacancyAllowanceRate',
    // 'Walls',
    // 'WarehouseSqFt',
    // 'iqImagesError',
    // 'iqFeedImagesTimestamp',
    // 'iqImages',
    // 'iqImagesTimestamp',
    // 'bay_BatchTimestamp',
    // 'bay_DownloaderStatus',
    // 'iqEndpointTimestamp',
    // 'iqHash']

    // iqHash1?.forEach((item) => {
    //     if(!iqHash?.includes(item)){
    //         iqHash.push(item)
    //     }
    // })

    // console.log("iqHash", iqHash)

    // iqHash?.forEach((item) => {
    //   if(keys?.includes(item)){
    //     iqHashVal.push(item)
    //   }
    // })

    // console.log("iqHashVal", iqHashVal)

  }, []);

  const getTasks = () => {
    fetch(serverUrl)
    .then(res => res.json())
    .then(data => {
      console.log('Data from backend:', data);
      setTask(data)
    })
    .catch(err => {
      console.error('Fetch error:', err);
    });
  }

  const removetask = (taskId) => {
    fetch(`${serverUrl}delete/${taskId}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(data => console.log('Response from server:', data))
      .catch(err => console.error('Error:', err))
      .finally(() => getTasks())
  };
  
  console.log(task)

  return (
    <div id="todoApp" className='h-100 bg-secondary'>
      <div>
        <div className='d-flex justify-content-end p-3'>
          <div className='btn btn-primary p-2' onClick={() => navigate('/addTask')}>
            + Add Task
          </div>
        </div>
        <div className='d-flex justify-content-center p-3'>
          <table id="listTable" className="table border border-200">
            <thead>
              <tr>
                <th scope="col">Task/No</th>
                <th scope="col">Task Name</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {task?.map((item) => {
                return(<tr key={item?._id} className='my-2'>
                  <td>{item?._id}</td>
                  <td>{item?.task}</td>
                  <td><div onClick={() => navigate(`/edit/${item?._id}`)} className='btn bg-primary text-white'>Edit</div></td>
                  <td><div className='btn bg-danger text-white' onClick={() => removetask(item?._id)}>Delete</div></td>
                </tr>)
              })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Todo;

export const EditTask = ({id, submitTxt}) => {
  const params = useParams();
  const navigate = useNavigate();
  // const location = useLocation();
  const [taskName, setTaskName] = useState('');

  // console.log("location", location)

  console.log("taskName", taskName)

  useEffect(() => {
    fetch(`${serverUrl}edit/${params?.id}`)
    .then(res => res.json())
    .then(data => {
      console.log('Data from backend:', data);
      setTaskName(data?.task);
    })
    .catch(err => {
      console.error('Fetch error:', err);
    });
  },[])

  const addTask = () => {
    fetch(`${serverUrl}addtask`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        addTask: taskName 
      }),
    })
      .then(res => res.json())
      .then(data => console.log('Response from server:', data))
      .catch(err => console.error('Error:', err))
      .finally(() => navigate('/'))
  }

  const handleSubmit = () => {
    fetch(`${serverUrl}edit/${params.id}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        newTaskName: taskName  // send the actual value of taskName
      }),
    })
      .then(res => res.json())
      .then(data => console.log('Response from server:', data))
      .catch(err => console.error('Error:', err));
  };

  return (
    <div className='d-flex justify-content-center border-grey border flex-column align-items-center h-100'>
      <div>
        <label className='d-block p-1'>Task Name</label>
        <div className='p-1'>
          <input
            className='d-block p-1'
            type='text'
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>
        <div className='p-1'>
          <input type='button' value={submitTxt} onClick={() => id === 'add' ? addTask() : handleSubmit()}/>
        </div>
      </div>

      {id !== 'add' &&
        <div className='btn bg-primary text-white' onClick={() => navigate('/')}>Back</div>}
    </div>
  );
}
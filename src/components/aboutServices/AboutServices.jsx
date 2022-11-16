import AboutServicesCard from '../aboutServicesCard/AboutServicesCard'
import './aboutServices.css'
import service1 from '../../assets/img/service1.png'

const AboutServices = () => {
  return (
    <div className='aboutServicesContainer'>
      <h1 className='aboutServicesH'>OUR SERVICES</h1>
      <div className='aboutServicesWrapper'>
        <div className='aboutServiceCardL'>
          <AboutServicesCard
            img={service1}
            title='Environmental Clean Up'
            content='Occaecat elit in dolor ut esse culpa et ipsum sint elit fugiat. Nulla ad exercitation laboris ut mollit aliquip magna. Occaecat occaecat pariatur deserunt commodo irure ipsum aliqua velit.'
          />
          <AboutServicesCard
            title='Recycling Waste'
            content='Occaecat elit in dolor ut esse culpa et ipsum sint elit fugiat. Nulla ad exercitation laboris ut mollit aliquip magna. Occaecat occaecat pariatur deserunt commodo irure i.'
            img=''
          />
        </div>
        <div className='aboutServiceCardR'>
          <AboutServicesCard
            title='Collect and Dispose Waste'
            content='Occaecat elit in dolor ut esse culpa et ipsum sint elit fugiat. Nulla ad exercitation laboris ut mollit aliquip magna. Occaecat occaecat pariatur deserunt commodo irure ipsum aliqua velit.'
            img=''
          />
          <AboutServicesCard
            title='Reward Users'
            content='Occaecat elit in dolor ut esse culpa et ipsum sint elit fugiat. Nulla ad exercitation laboris ut mollit aliquip magna. Occaecat occaecat pariatur deserunt commodo irure ipsum aliqua velit.p'
            img=''
          />
        </div>
      </div>
    </div>
  )
}

export default AboutServices

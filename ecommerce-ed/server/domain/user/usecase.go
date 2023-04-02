package user

import (
	"github.com/Anderson-Angulo/ecommerce/server/model"
	"github.com/google/uuid"
)


type User struct{
	storage Storage
}

func New(s Storage) User{
	return User{
		storage: s
	}
}


func (u *User) Create(m *model.User)error{
  ID,err := uuid.NewUUID()
	if err!= nil{
		return fmt.Errorf("%s %w","uuid.NewUUID()",err)
	}		
	m.ID= ID
	password,err := 
}